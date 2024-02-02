import { IPlaceData, Place } from '@/types/scheldue'
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import PlaceItem from './PlaceItem/PlaceItem'
import styles from './placeChoose.module.scss'
interface IPlaceChoose {
  places: Place[][]
  setPlaceData: Dispatch<SetStateAction<IPlaceData[]>>
}
const PlaceChoose: FC<IPlaceChoose> = ({ places, setPlaceData }) => {
  const [active, setActive] = useState<number[]>([])

  const counterRef = useRef(1)
  const setActiveHandler = (
    placeNumber: number,
    rowNumber: number,
    price: number,
  ) => {
    if (!active?.includes(placeNumber)) {
      setPlaceData(prevState => [
        ...prevState,
        {
          place: String(placeNumber),
          row: String(rowNumber),
          price,
        },
      ])
      setActive(prevState => [...prevState, placeNumber])
    } else {
      setPlaceData(prevState =>
        [...prevState].filter(el => el.place !== String(placeNumber)),
      )
      setActive(prevState => [...prevState].filter(el => el !== placeNumber))
    }
  }
  useEffect(() => {
    counterRef.current = 1
    setActive([])
  }, places)
  counterRef.current = 0
  return (
    <div className={styles.choose__container}>
      <p className={styles.choose__title}>Экран</p>
      <hr />
      <p className={styles.choose__row_title}>Ряд</p>
      <div className={styles.choose__wrap}>
        {places.map((el, i) => (
          <div key={i} className={styles.choose__row}>
            <p className={styles.choose__row_number}>{i + 1}</p>
            {el.map((item, j) => {
              counterRef.current++
              return (
                <PlaceItem
                  disabled={Number(item.price) === 0 ? true : false}
                  key={counterRef.current}
                  active={active?.includes(counterRef.current)}
                  setActive={e => {
                    setActiveHandler(e, i + 1, item.price)
                  }}
                  number={counterRef.current}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlaceChoose
