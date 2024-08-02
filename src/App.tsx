import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import 'react-multi-carousel/lib/styles.css';

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App;