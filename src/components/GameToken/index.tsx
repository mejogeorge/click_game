import { GameClickProfile } from '../../modules/Game/store/interface'

export default ({ gameProfile }: { gameProfile: GameClickProfile }) => (
  <div>
    Game token
    <br />
    clicks: {gameProfile.click}
    <br />
    Time: {gameProfile.time}
  </div>
)
