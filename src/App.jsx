import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './dashboard';
import Users from './Users';
import Products from './Products';
import Portal from './portal';
import Login from './Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Createuser from './createuser';
import Userview from './Userview';
import Editusers from './Editusers';
import Productsview from './Productsview';
import Editproducts from './Editproducts';
import Createproduct from './Createproduct';





function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="Users" element={<Users />} />
            <Route path="Users/:id" element={<Userview />} />
            <Route path="Users/edit/:id" element={<Editusers />} />
            <Route path="Products" element={<Products />} />
            <Route path="Products/:id" element={<Productsview />} />
            <Route path="Products/edit/:id" element={<Editproducts />} />
            <Route path="createuser" element={<Createuser />} />
            <Route path="createproduct" element={<Createproduct />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
