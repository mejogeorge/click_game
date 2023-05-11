import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { gameHomeState } from './interface'



export const useHomeStore = create<gameHomeState>()(
    devtools(
        (set) => ({
            allGames: [],
            getGames: (games) => {
                set(() => ({
                    allGames: games
                })
                )
            },
        }),
        {
            name: 'bear-storage',
        }
    )
)