import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { GameState } from './interface'
import initialState from './initialState'



export const useGameStore = create<GameState>()(
  devtools(
      (set, get) => ({
        ...initialState,
        recordClicks: ({click, time}) => {
            set(() => ({ 
                clickProfile: {
                    click: get().clickProfile.click + click,
                    time
                }
            })
        )},
      }),
      {
        name: 'bear-storage',
      }
  )
)