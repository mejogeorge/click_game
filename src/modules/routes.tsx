import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Game from './Game'

const App = () => (
  <div>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Game />} path='/game/*' />
    </Routes>
  </div>
)

export default App
