# react-locale-price-input

A React input component for localized price formatting. Automatically formats numbers based on user locale, making it easy to handle price inputs in your React applications.

## Features

- 🌍 Supports localization based on `locale` (e.g., `en-US`, `de-DE`, `fa-IR`)
- 💰 Automatic thousand separators
- 🔢 Handles decimals correctly according to locale
- ⚡ Lightweight and easy to integrate
- 🎯 Fully controlled or uncontrolled input support

## Installation

```bash
npm install react-locale-price-input
# or
yarn add react-locale-price-input
```

## Usage

```jsx
import React, { useState } from "react";
import LocalePriceInput from "react-locale-price-input";

function App() {
  const [price, setPrice] = useState("");

  return (
    <div>
      <h1>Enter Price:</h1>
      <LocalePriceInput
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        locale="en-US"
        maximumFractionDigits={2}
      />
      <p>Price value: {price}</p>
    </div>
  );
}

export default App;
```

## Props

| Prop                    | Type       | Default   | Description                   |
| ----------------------- | ---------- | --------- | ----------------------------- |
| `value`                 | `string`   | `'1234'`  | Current value of the input    |
| `onChange`              | `function` | -         | Callback when value changes   |
| `locale`                | `string`   | `'en-US'` | Locale for formatting numbers |
| `maximumFractionDigits` | `number`   | `2`       | Maximum fraction digits       |

## Example

```jsx
<LocalePriceInput
  value={price}
  onChange={setPrice}
  locale="de-DE"
  placeholder="Enter amount"
/>
```

This will format the input like `1.234,56 €` for German locale.

## License

MIT © Amin Dasoomi
