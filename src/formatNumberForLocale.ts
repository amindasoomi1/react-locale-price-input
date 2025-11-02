type Options = {
  value: string;
  locale: string;
  groupSeparator: string;
  decimalSeparator: string;
  maximumFractionDigits: number;
};

export default function formatNumberForLocale({
  value,
  locale,
  // groupSeparator,
  decimalSeparator,
  maximumFractionDigits,
}: Options) {
  if (!value) return "";
  const [intValue = "", decimalValue = null] = value.split(".");
  const int = Number(intValue).toLocaleString(locale);
  const decimal = decimalValue?.slice(0, maximumFractionDigits);
  const hasDecimal = decimalValue !== null && !!maximumFractionDigits;
  if (!hasDecimal) return int;
  return [int, decimal].join(decimalSeparator);
}
