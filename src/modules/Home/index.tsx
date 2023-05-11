import { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useHomeStore } from './store'
import { Options } from './store/interface'
import Header from '../../components/Header/Header'
import { HeaderItem } from '../../components/Header/interface'
import './home.css'
import Game from '../Game'
import About from '../About'

const headerData = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'GAMES',
    path: '/game'
  },
  {
    name: 'ABOUT US',
    path: '/about'
  }
]
const data: Options[] = [
  {
    type: 'Board',
    games: [
      {
        gameName: 'Monopoly',
        icon: '',
        rating: 5,
        downloads: 100
      },
      {
        gameName: 'tic-tac-to',
        icon: '',
        rating: 5,
        downloads: 100
      },
      {
        gameName: 'Chess',
        icon: '',
        rating: 5,
        downloads: 100
      }
    ]
  },
  {
    type: 'Fighting',
    games: [
      {
        gameName: 'Call Of duty',
        icon: '',
        rating: 5,
        downloads: 100
      },
      {
        gameName: 'Call Of duty',
        icon: '',
        rating: 5,
        downloads: 100
      },
      {
        gameName: 'Pub-G',
        icon: '',
        rating: 5,
        downloads: 100
      }
    ]
  },
  {
    type: 'Racing',
    games: [
      {
        gameName: 'Hot Pursuit',
        icon: '',
        rating: 5,
        downloads: 100
      },
      {
        gameName: 'Most Wanted',
        icon: '',
        rating: 5,
        downloads: 100
      },
      {
        gameName: 'Grid',
        icon: '',
        rating: 5,
        downloads: 100
      }
    ]
  }
]

export default () => {
  const store = useHomeStore(state => ({
    getGame: state.getGames,
    allGames: state.allGames
  }))
  console.log('allGames>>>', store.allGames)
  useEffect(() => {
    store.getGame(data)
  }, [])
  return (
    <div className='container'>
      <Header headerItems={headerData as HeaderItem[]} />
      Home
      <br />
      <Link to={'/game'}>Goto Game</Link>
      <Routes>
        <Route element={<Game />} path='/game/*' />
        <Route element={<About />} path='/about' />
      </Routes>
    </div>
  )
}
