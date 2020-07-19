// Render updated from default by David Larsen

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Pecans from "./components/Pecans"

ReactDOM.render(
  <Router>
    <Pecans />
  </Router>,
  document.getElementById('root')
);
