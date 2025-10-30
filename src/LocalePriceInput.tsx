"use client";
import { ChangeEvent, ComponentProps, useMemo } from "react";
import formatNumberForLocale from "./formatNumberForLocale";
import getNumberSeparators from "./getNumberSeparators";
import replaceNonDigits from "./replaceNonDigits";
import replacePersianNumbers from "./replacePersianNumber";
import sanitizeNumberInput from "./sanitizeNumberInput";

type BaseProps = { value?: string; locale?: string; type?: never };
type Props = BaseProps & Omit<ComponentProps<"input">, keyof BaseProps>;

export default function LocalePriceInput({
  locale = "en-US",
  value,
  onChange,
  ...props
}: Props) {
  const { groupSeparator, decimalSeparator } = useMemo(() => {
    return getNumberSeparators(locale);
  }, [locale]);

  const formattedValue = useMemo(() => {
    const result = formatNumberForLocale({
      value: replaceNonDigits(replacePersianNumbers(value ?? "")),
      locale,
      groupSeparator,
      decimalSeparator,
    });
    return replacePersianNumbers(result);
  }, [value, locale, groupSeparator, decimalSeparator]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = sanitizeNumberInput({
      value,
      locale,
      groupSeparator,
      decimalSeparator,
    });
    const cleanValue = replaceNonDigits(replacePersianNumbers(sanitizedValue));
    onChange?.({
      ...e,
      target: { ...e.target, value: cleanValue },
      currentTarget: { ...e.currentTarget, value: cleanValue },
    });
    // onChange?.({...e,target:{...e.target}});
  };

  return (
    <input
      type="text"
      value={formattedValue}
      onChange={handleChange}
      inputMode="decimal"
      {...props}
    />
  );
}
