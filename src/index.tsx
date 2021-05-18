import React from 'react';
import ReactDOM from 'react-dom';
import { AverageComponent } from './averageComponent';
import { TotalScoreComponent } from './totalScoreComponent';
import logo from './content/logo_1.png';


ReactDOM.render(
  <div>
    <h1>Session 3: Bundling</h1>
    <img src={logo} />
    <AverageComponent />
   <TotalScoreComponent />
  </div>,
  document.getElementById('root')
);


