import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import 'normalize.css';
import './index.css';
import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


// Стрикт мод убивает проверку авторизации
// - дважды отправляет на сервер запрос с одними и теми же куками,
// но первый запрос МЕНЯУТ куки,
// а потому второй вызывает ошибку, что "куки уже не те"

// root.render(
//   <React.StrictMode>
//     <ToastContainer/>
//     <Provider store={store}>
//       <App />
//     </Provider>

//   </React.StrictMode>,
// );

root.render(
  // <Provider>
  //   <ToastContainer />
    <App />
  // </Provider>,
);
