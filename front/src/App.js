import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  
     <BrowserRouter>
    
    

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Login" element={<Login/> } />
        <Route path="*" element={<PageNotFound />} />
       
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
