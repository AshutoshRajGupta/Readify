import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    // <div className="bg-blue-200 h-screen">
    // <div className="bg-gradient-to-r from-blue-200 to-green-200 via-yellow-200 h-screen">
    <div className="bg-gradient-to-br from-purple-100 via-pink-200 to-orange-200 min-h-screen">

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
    
    </div>
  );
};

export default App;
