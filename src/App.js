import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/products';
import Order from './components/orders';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Product/>}/>
                    <Route path='/orders' element={<Order/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;