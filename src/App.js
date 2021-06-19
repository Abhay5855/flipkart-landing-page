import "./App.css";
import ProductList from './components/ProductList';
// import ProductListWomen from './components/ProductListWomen';
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">

      <div className="main-navbar">


      <Navbar />

      </div>


      {/* <div className="main-sidebar"> 

      <Sidebar />

      </div> */}
     

     
      <div className="main-list">

      <ProductList  />

      </div>
      
    </div>
  );
}

export default App;
