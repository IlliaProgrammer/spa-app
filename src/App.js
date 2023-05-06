import NavBar from './components/nav-bar/NavBar';
import './App.css';
import AppRouter from './components/app-router/AppRouter';
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>   
        <AppRouter/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
