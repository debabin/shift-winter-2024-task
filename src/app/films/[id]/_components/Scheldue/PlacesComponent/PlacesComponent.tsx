import { IPlaceData, Place } from '@/types/scheldue'
import { FC, useEffect, useState } from 'react'
import PlaceChoose from './PlaceChoose/PlaceChoose'
import PlaceData from './PlaceData/PlaceData'
import styles from './places.module.scss'

interface IPlacesComponent {
  places: Place[][]
}

const PlacesComponet: FC<IPlacesComponent> = ({ places }) => {
  const [placeData, setPlaceData] = useState<IPlaceData[]>([])
  useEffect(() => {
    setPlaceData([])
  }, places)
  console.log(placeData)
  return (
    <div className={styles.places__container}>
      <p className={styles.places__title}>Выбор места</p>
      <div className={styles.places__wrap}>
        <PlaceChoose setPlaceData={setPlaceData} places={places} />
        <PlaceData places={placeData} day="1" hall="1" hour="1" />
      </div>
    </div>
  )
}

export default PlacesComponet
