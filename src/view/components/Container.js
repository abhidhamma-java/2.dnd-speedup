import { useRecoilState } from 'recoil'
import { displayAtom, reservationListAtom, roomTypeListAtom } from '../../data/state'
import ReservationInfo from './ReservationInfo'
import RoomType from './RoomType/RoomType'

export default function Container() {
  const [roomTypeList, setRoomTypeList] = useRecoilState(roomTypeListAtom)
  const [reservationList, setReservationList] = useRecoilState(reservationListAtom)
  const [display, setDisplay] = useRecoilState(displayAtom)

  return (
    // <!-- S:Container -->
    <div id='container'>
      {/* <!-- S:content --> */}
      <div className='full-content reserv-state'>
        <div className='titWrap'>
          <h3>예약현황</h3>
        </div>
        <div className='date-selectWrap dF-s'>
          <div className='date-view'>
            <button type='button' className='btn btn-middle gray'>
              7일보기
            </button>
            <button type='button' className='btn btn-middle gray'>
              15일보기
            </button>
            <button type='button' className='btn btn-middle gray'>
              30일보기
            </button>
            <button type='button' className='btn btn-middle gray active'>
              오늘
            </button>
          </div>
          <div className='today-date'>
            <button type='button' className='prev'>
              <span className='hdn'>이전일</span>
            </button>
            <span className='today'>2022.01.24(월)</span>
            <button type='button' className='next'>
              <span className='hdn'>다음일</span>
            </button>
          </div>
          <div className='item-state'>
            <div>
              <span className='st1'></span>미입금 잔금
            </div>
            <div>
              <span className='st2'></span>요청 완료
            </div>
            <div>
              <span className='st3'></span>입실
            </div>
            <div>
              <span className='st4'></span>퇴실
            </div>
            <div>
              <span className='st5'></span>미입금퇴실
            </div>
          </div>
        </div>
        <div className='timetable'>
          <div className='scheduler-header dF-f'>
            <div className='room-tit'>타입/객실</div>
            <div className='date-row dF-f'>
              <div>
                <p>1</p>
                <p>
                  <span className='day'>월</span>
                </p>
                <span className='today'>Today</span>
              </div>
              <div>
                <p>2</p>
                <p>
                  <span className='day'>화</span>
                </p>
              </div>
              <div>
                <p>3</p>
                <p>
                  <span className='day'>수</span>
                </p>
              </div>
              <div>
                <p>4</p>
                <p>
                  <span className='day'>목</span>
                </p>
              </div>
              <div>
                <p>5</p>
                <p>
                  <span className='day'>금</span>
                </p>
              </div>
              <div className='sat'>
                <p>6</p>
                <p>
                  <span className='day'>토</span>
                </p>
              </div>
              <div className='sun'>
                <p>7</p>
                <p>
                  <span className='day'>일</span>
                </p>
              </div>
              <div>
                <p>8</p>
                <p>
                  <span className='day'>월</span>
                </p>
              </div>
              <div>
                <p>9</p>
                <p>
                  <span className='day'>화</span>
                </p>
              </div>
              <div>
                <p>10</p>
                <p>
                  <span className='day'>수</span>
                </p>
              </div>
              <div>
                <p>11</p>
                <p>
                  <span className='day'>목</span>
                </p>
              </div>
              <div>
                <p>12</p>
                <p>
                  <span className='day'>금</span>
                </p>
              </div>
              <div className='sat'>
                <p>13</p>
                <p>
                  <span className='day'>토</span>
                </p>
              </div>
              <div className='sun'>
                <p>14</p>
                <p>
                  <span className='day'>일</span>
                </p>
              </div>
              <div>
                <p>15</p>
                <p>
                  <span className='day'>월</span>
                </p>
              </div>
              <div>
                <p>16</p>
                <p>
                  <span className='day'>화</span>
                </p>
              </div>
              <div>
                <p>17</p>
                <p>
                  <span className='day'>수</span>
                </p>
              </div>
              <div>
                <p>18</p>
                <p>
                  <span className='day'>목</span>
                </p>
              </div>
              <div>
                <p>19</p>
                <p>
                  <span className='day'>금</span>
                </p>
              </div>
              <div className='sat'>
                <p>20</p>
                <p>
                  <span className='day'>토</span>
                </p>
              </div>
              <div className='sun'>
                <p>21</p>
                <p>
                  <span className='day'>일</span>
                </p>
              </div>
              <div>
                <p>22</p>
                <p>
                  <span className='day'>월</span>
                </p>
              </div>
              <div>
                <p>23</p>
                <p>
                  <span className='day'>화</span>
                </p>
              </div>
              <div>
                <p>24</p>
                <p>
                  <span className='day'>수</span>
                </p>
              </div>
              <div>
                <p>25</p>
                <p>
                  <span className='day'>목</span>
                </p>
              </div>
              <div>
                <p>26</p>
                <p>
                  <span className='day'>금</span>
                </p>
              </div>
              <div className='sat'>
                <p>27</p>
                <p>
                  <span className='day'>토</span>
                </p>
              </div>
              <div className='sun'>
                <p>28</p>
                <p>
                  <span className='day'>일</span>
                </p>
              </div>
              <div>
                <p>29</p>
                <p>
                  <span className='day'>월</span>
                </p>
              </div>
              <div>
                <p>30</p>
                <p>
                  <span className='day'>화</span>
                </p>
              </div>
            </div>
          </div>
          {/* <a href='#' className='reArea st5' style={{ width: 'calc(200% + 2px)', left: '0px', display: 'block' }}>
                홍길동
              </a> */}
          {/* <a href='#' className='reArea st1' style={{ width: 'calc(300% + 3px)', left: '0px', display: 'block' }}>
                홍길동
              </a> */}
          <div className='scheduler-view'>
            {roomTypeList.map((roomType, index) => {
              return <RoomType key={index} roomType={roomType} />
            })}
            {/* <!-- S:layer --> */}
            <ReservationInfo display={display} />
            {/* <!-- E:layer --> */}
          </div>
        </div>
      </div>
      {/* <!-- E:content --> */}
    </div>
    // <!-- E:Container -->
  )
}
