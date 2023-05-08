import { Link, Route, Routes, useParams } from 'react-router-dom'
import GameToken from '../../components/GameToken'
import { useGameStore } from './store'
import { GAME_TYPES, GAME_TYPES_INTERFACE } from './store/constants'

export default () => {
  const gameStore = useGameStore(state => ({
    clickProfile: state.clickProfile,
    recordClicks: state.recordClicks
  }))
  const onClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    gameStore.recordClicks({
      click: 1,
      time: Date.now()
    })
    return e
  }
  const data = {
    gameType: 'spg'
  }
  const gameType = GAME_TYPES[data.gameType as keyof GAME_TYPES_INTERFACE]
  return (
    <div>
      <GameToken gameProfile={gameStore.clickProfile} />
      <button onClick={e => onClick(e)}>CLICK</button>
      {gameType}
      <Link to='test/234'>test</Link>
      <Routes>
        <Route path='test/:id' element={<GameTestComp />}></Route>
        <Route path='' element={<div>test default</div>}></Route>
      </Routes>
    </div>
  )
}

export const GameTestComp = () => {
  const params = useParams()
  return (
    <div>
      GameTestComp
      <br />
      {params['id']}
    </div>
  )
}
