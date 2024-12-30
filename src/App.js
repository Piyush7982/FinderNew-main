import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import User from "./components/Pages/User";
import NotFound from "./components/Pages/NotFound";
import Alert from "./components/layout/Alert";
import {GithubProvider} from "./context/github/GithubContext"
import {AlertProvider} from "./context/alert/AlertContext";


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
          <div class="flex flex-col justify-between h-screen">

            <Navbar title="Github Finder"/>

            <main className="container mx-auto px-3 pb-12">
            <Alert />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/user/:login' element={<User/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </Routes>

            </main>

          
            <Footer/>
          </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
    
    
  );
}

export default App;
