
interface GameItem {
    gameName: string
    icon: string
    rating: number
    downloads: number
}

export interface Options {
    type: 'Racing' | 'Board' | 'Fighting'
    games: GameItem[]
}

export interface gameHomeState {
    allGames: Options[]
    getGames: (games: Options[]) => void
}