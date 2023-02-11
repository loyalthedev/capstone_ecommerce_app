import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation';
import Home from "./routes/Home/Home";
import Authentication from './routes/Authentication/Authentication';



const Shop = () => {
  return <h1>This is the shop page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;