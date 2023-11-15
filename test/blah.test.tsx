import * as ReactDOM from 'react-dom';

describe('it', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.unmountComponentAtNode(div);
  });
});
