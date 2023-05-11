import { HeaderProps, HeaderItem } from './interface'
import './Header.css'

export default ({ headerItems }: HeaderProps) => {
  const onClick = (path: string) => (): void => {
    window.location.href = path
  }
  return (
    <div className='headerContainer'>
      <div className='headerItemsWrapper'>
        {headerItems.map((item: HeaderItem) => (
          <div
            key={item.name}
            className='headerItem'
            onClick={onClick(item.path)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}
