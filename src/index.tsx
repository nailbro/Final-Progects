import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { UserProvider } from './context/UserContext';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render( 
<UserProvider>
    <Provider store={store}>
     <App />
    </Provider>
</UserProvider>
);
