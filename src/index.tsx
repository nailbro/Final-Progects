import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer, toast} from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render( 
<Provider store={store}>
<App />
<ToastContainer position="bottom-left" autoClose={2000} />
</Provider>
);
