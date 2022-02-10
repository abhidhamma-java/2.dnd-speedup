import { useRecoilState } from 'recoil'
import { reservationListAtom } from '../../../data/state'
import Price from './Price'

export default function RoomReservation({ monthPrice }) {
  const [reservationList, setReservationList] = useRecoilState(reservationListAtom)
  return (
    <div className='dF-f'>
      {monthPrice.map((day) => {
        const index = day.id
        const [currentReservation] = reservationList.filter((reservation) => reservation.startIndex === index)

        if (reservationList.map((reservation) => reservation.startIndex).indexOf(index) > -1) {
          return <Price key={index} price={day.price} targetIndex={index} reservation={currentReservation} />
        } else {
          return <Price key={index} price={day.price} targetIndex={index} />
        }
      })}
    </div>
  )
}
