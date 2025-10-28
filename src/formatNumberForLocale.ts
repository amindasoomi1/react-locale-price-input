type Options = {
  value: string;
  locale: string;
  groupSeparator: string;
  decimalSeparator: string;
};

export default function formatNumberForLocale({
  value,
  locale,
  // groupSeparator,
  decimalSeparator,
}: Options) {
  if (!value) return "";
  const [intValue = "", decimalValue = null] = value.split(".");
  const int = Number(intValue).toLocaleString(locale);
  const decimal = decimalValue?.slice(0, 2);
  const hasDecimal = decimalValue !== null;
  if (!hasDecimal) return int;
  return [int, decimal].join(decimalSeparator);
}
