import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Login from "./pages/Login";
import Signup from "./pages/Signup";






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" index element={< Home />} />
      <Route path='/service' element={<Service />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      
      {/* ... etc. */}
    </Route>
  )
);


function App() {


  return (
    <div>
      
     <RouterProvider router = {router} />  
     
    </div>
  );
}

export default App;