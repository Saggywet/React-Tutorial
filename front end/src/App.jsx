import './css/App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Favorites from './pages/favorite'
import NavBar from './components/NavBar'
import { MovieProvider } from './context/MovieContext'

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>

      </Routes>
    </main>
    </MovieProvider>
  )
}


export default App
