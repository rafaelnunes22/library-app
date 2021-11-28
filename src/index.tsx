import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Grid } from "./components/Grid";
import { Provider } from "react-redux";

import { store } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Grid>
        <App />
      </Grid>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
