import logo from './logo.svg';
import './App.css';
import { Button, Space } from 'antd';
import { BrowserRouter,Router,Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Templates from './Pages/templates';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
    
      <Routes>

          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route path='/templates/:id' element={<ProtectedRoute><Templates/></ProtectedRoute>}/>

          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />






      </Routes>
   
   
   
   
   </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props){
  if(localStorage.getItem("my-cv-users"))
  {
    return props.children;
  }else
  {
    return  <Navigate to ="/login"/>;
  }
}
