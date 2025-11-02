type Options = {
  value: string;
  locale: string;
  groupSeparator: string;
  decimalSeparator: string;
  maximumFractionDigits: number;
};

export default function sanitizeNumberInput({
  value,
  //   locale,
  groupSeparator,
  decimalSeparator,
  maximumFractionDigits,
}: Options) {
  if (!value) return "";
  const [int, decimal = null] = value.split(decimalSeparator);
  const hasDecimal = decimal !== null && !!maximumFractionDigits;
  if (hasDecimal) {
    return [
      int.replace(new RegExp(`\\${groupSeparator}`, "g"), ""),
      decimal.slice(0, maximumFractionDigits),
    ].join(".");
  }
  return int.replace(new RegExp(`\\${groupSeparator}`, "g"), "");
}
