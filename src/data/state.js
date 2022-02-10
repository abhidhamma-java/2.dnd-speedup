import { atom } from 'recoil'
import makeDummyData from './makeDummyData'

export const renderCountAtom = atom({
  key: 'renderCountAtom',
  default: 0,
})
export const roomTypeListAtom = atom({
  key: 'roomTypeListAtom',
  default: makeDummyData(1),
})
export const currentReservationAtom = atom({
  key: 'currentReservationAtom',
  default: { startIndex: null, endIndex: null, color: null, data: null },
})
export const reservationListAtom = atom({
  key: 'reservationListAtom',
  default: [
    { startIndex: 0, endIndex: 0, color: '#34C38F', data: '김길동' },
    { startIndex: 1, endIndex: 3, color: '#5B73E8', data: '한길동' },
    { startIndex: 28, endIndex: 29, color: '#F46A6A', data: '박길동' },
    { startIndex: 41, endIndex: 42, color: '#F1B44C', data: '송길동' },
    { startIndex: 51, endIndex: 55, color: '#50A5F1', data: '하길동' },
  ],
})
export const displayAtom = atom({
  key: 'displayAtom',
  default: {
    display: 'none',
    name: '홍길동',
  },
})
