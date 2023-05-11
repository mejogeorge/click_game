export interface GameState extends GameInitialState {
    recordClicks: ({ click, time }: GameClickProfile) => void
}

export interface GameClickProfile {
    click: number
    time: number
}

export interface GameInitialState {
    loader: boolean
    clickProfile: GameClickProfile
}

export type game = {
    loader: boolean
    clickProfile: GameClickProfile
}

