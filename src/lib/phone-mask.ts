// Казахстанская маска: +7 (___) ___-__-__
export function formatKzPhone(value: string): string {
  // Берём только цифры, отбрасываем ведущие 7/8
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (digits.startsWith("7")) digits = digits.slice(1);
  digits = digits.slice(0, 10);

  const p1 = digits.slice(0, 3);
  const p2 = digits.slice(3, 6);
  const p3 = digits.slice(6, 8);
  const p4 = digits.slice(8, 10);

  let out = "+7";
  if (digits.length === 0) return out + " (";
  out += " (" + p1;
  if (digits.length >= 3) out += ")";
  if (p2) out += " " + p2;
  if (p3) out += "-" + p3;
  if (p4) out += "-" + p4;
  return out;
}

export function isValidKzPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("7");
}
