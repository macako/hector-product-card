import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../src/components';

const product = {
  id: '1',
  title: 'Coffee Mug',
  //image: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
        {({ reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />

            <button onClick={reset}>reset</button>
          </>
        )}
      </ProductCard>
      ;
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
