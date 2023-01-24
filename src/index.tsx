import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

let container = document.getElementById('root');
const root = ReactDOM.createRoot(container as Element);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)