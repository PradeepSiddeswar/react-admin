import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/home/Home';
import Form from './components/form/Form';



function App(props) {
  return (
    <>
      
      <BrowserRouter>
     
        <Routes>
          <Route path="/">
          <Route index element={<Home />} />
        
          <Route index element={<Form />} />
      
          <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
