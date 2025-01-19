import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import './styles/global.css';
import './styles/index.css';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
