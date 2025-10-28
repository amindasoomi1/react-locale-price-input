type Options = {
  value: string;
  locale: string;
  groupSeparator: string;
  decimalSeparator: string;
};

export default function sanitizeNumberInput({
  value,
  //   locale,
  groupSeparator,
  decimalSeparator,
}: Options) {
  if (!value) return "";
  const [int, decimal = null] = value.split(decimalSeparator);
  const hasDecimal = decimal !== null;
  if (hasDecimal) {
    return [
      int.replace(new RegExp(`\\${groupSeparator}`, "g"), ""),
      decimal.slice(0, 2),
    ].join(".");
  }
  return int.replace(new RegExp(`\\${groupSeparator}`, "g"), "");
}
