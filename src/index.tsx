import ReactDOM from 'react-dom/client';
import  React from "react";
import App from './App';
import './styles/index.scss';

const rootElem = document.getElementById('root');

if(rootElem !== null) {
  const root = ReactDOM.createRoot(rootElem);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

