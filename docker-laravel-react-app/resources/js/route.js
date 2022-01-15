
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
  } from 'react-router-dom';
import PostEdit from './pages/PostEdit';
import Example from './pages/Example';
import Home from './pages/Home';

  function App() {
    return (
        <div>
            <Routes>
                <Route path='/example' exact element={<Example />} />
                <Route path='/' exact  element={<Home />}/>
                <Route path='/post/edit/:id' exact element={<PostEdit />} />
            </Routes>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
