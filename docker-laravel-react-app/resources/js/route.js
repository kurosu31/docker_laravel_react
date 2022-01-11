
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import Example from './pages/Example';
import Home from './pages/Home';

  function App() {
    return (
        <div>
            <Routes>
                <Route path='/' exact  element={<Home />}/>

                <Route path='/example' exact element={<Example />} />

            </Routes>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
