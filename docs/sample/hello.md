---
sidebar_label: 'Hi!'
sidebar_position: 2
---

# Hello

This is my **first Docusaurus document**!

## Image

![Docusaurus logo](/img/docusaurus.png)

## Code Blocks

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

## MDX and React Components

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
