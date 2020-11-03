import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';

import Preparation from './components/Preparation';
import Sign from './components/Sign';
import View from './components/View';

import './App.css';

const App = () => {
  const user = {'id': 1, 'username': 'administator', 'email': "administrator@smartfile.com"}
  const dispatch = useDispatch();

  return <div>
      <Router>
        <Preparation path="/" />
        <Sign path="/signDocument" />
        <View path="/viewDocument" />
      </Router>
    </div>
};

export default App;
