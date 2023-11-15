## Example

```jsx
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from './components';

<ProductCard
  key={product.id}
  product={product}
  initialValues={{ count: 4, maxCount: 10 }}
>
  {({ reset }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />

      <button onClick={reset}>reset</button>
    </>
  )}
</ProductCard>;
```
