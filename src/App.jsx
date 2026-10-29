import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Bounce, ToastContainer } from "react-toastify";
import AllCourse from "./pages/AllCourse";
import EditCourse from "./pages/EditCourse";
import AddCourse from "./pages/AddCourse";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/allcourse" element={<AllCourse />}></Route>
         <Route path="/addcourse" element={<AddCourse />} />
         <Route path="/editcourse/:id" element={<EditCourse />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
