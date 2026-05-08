import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

type MetaTag =
  | { title: string }
  | { name?: string; property?: string; content?: string; charSet?: string };

/**
 * Читает `head.meta` из всех совпавших роутов TanStack Router и применяет
 * их к `document` в SPA-режиме (заменяет SSR-вариант HeadContent).
 * Вызывается один раз в RootComponent.
 */
export function RouteHead() {
  const matches = useRouterState({ select: (s) => s.matches });

  useEffect(() => {
    // Собираем meta из всех совпавших роутов (от корня к листу)
    const allMeta: MetaTag[] = [];
    for (const m of matches) {
      const headFn = (m.staticData as any)?.head ?? (m as any).meta;
      // TanStack кладёт результат head() в m.meta и m.headMeta — берём актуальное
      const metaList = (m as any).meta as MetaTag[] | undefined;
      if (metaList && Array.isArray(metaList)) {
        allMeta.push(...metaList);
      }
    }

    // Title — последний выигрывает
    const titleEntry = [...allMeta].reverse().find((m) => "title" in m && m.title);
    if (titleEntry && "title" in titleEntry && titleEntry.title) {
      document.title = titleEntry.title;
    }

    // description / og:* / twitter:* — обновляем по name|property
    const managedKeys = new Set<string>();
    for (const m of allMeta) {
      if ("title" in m) continue;
      const key = (m.name && `name:${m.name}`) || (m.property && `property:${m.property}`);
      if (!key || !m.content) continue;
      managedKeys.add(key);
      upsertMeta(m, key);
    }
  }, [matches]);

  return null;
}

function upsertMeta(meta: { name?: string; property?: string; content?: string }, key: string) {
  const selector = meta.name
    ? `meta[name="${meta.name}"]`
    : `meta[property="${meta.property}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    if (meta.name) el.setAttribute("name", meta.name);
    if (meta.property) el.setAttribute("property", meta.property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", meta.content ?? "");
  el.dataset.routeHead = key;
}
