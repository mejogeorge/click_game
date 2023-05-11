import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import About from './About'

const App = () => (
  <div>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Game />} path='/game/*' />
      <Route element={<About />} path='/about' />
    </Routes>
  </div>
)

export default App
