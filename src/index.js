import React from 'react';
import ReactDOM from 'react-dom';
import { Admin } from './views/Admin/Admin';
import '@fontsource/roboto';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>  
    <BrowserRouter>
      <Admin/>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
