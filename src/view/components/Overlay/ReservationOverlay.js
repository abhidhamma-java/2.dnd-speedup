import { useRecoilState } from 'recoil'
import { displayAtom } from '../../../data/state'

export default function ReservationOverlay({ data, drag }) {
  const [display, setDisplay] = useRecoilState(displayAtom)
  const length = data.endIndex - data.startIndex + 1

  const showInfo = () => {
    setDisplay({ display: 'block', name: data.data })
  }
  const hideInfo = () => {
    setDisplay({ display: 'none', name: data.data })
  }
  return (
    <div
      onMouseEnter={showInfo}
      onMouseLeave={hideInfo}
      ref={drag}
      style={{
        display: 'grid',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: `calc(${length}00% + ${length}px)`,
        zIndex: 1,
        backgroundColor: data.color,
        color: 'white',
      }}>
      <div style={{ placeSelf: 'center' }}>{data.data}</div>
    </div>
  )
}
