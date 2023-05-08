import { Link } from 'react-router-dom'

export default () => (
  <div>
    Home
    <br />
    <Link to={'/game'}>Goto Game</Link>
  </div>
)
