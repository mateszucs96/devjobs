import ReactDOM from 'react-dom/client';
import './globals.scss';
import App from './App';
import DataContextProvider from 'helpers/data-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);
