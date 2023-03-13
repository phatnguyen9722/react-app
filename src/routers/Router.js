import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from '../pages/Home'
import UseRef from '../pages/UseRef'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to = "home"/>}/>
      <Route path="home" element={<HomePage />} />
      <Route path="useref" element={<UseRef />} />
      
     
    </Routes>
  );
}

export default Router;
