import FormComponent from '@/shared/Form/Form'
import ModalWrapper from '@/shared/Modal/Modal'
import { IPlaceData } from '@/types/scheldue'
import { Button } from 'antd'
import { FC, useState } from 'react'
import styles from './placeData.module.scss'

interface IPlaceDataComponent {
  hall: string
  day: string
  hour: string
  places: IPlaceData[]
}

const PlaceData: FC<IPlaceDataComponent> = ({ hall, day, hour, places }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const dataPlaces: IPlaceData[][] = []
  places.forEach(el => {
    dataPlaces[Number(el.row)] =
      dataPlaces[Number(el.row)] !== undefined
        ? [...dataPlaces[Number(el.row)], el]
        : [el]
  })
  console.log(dataPlaces)

  return (
    <>
      <ModalWrapper isOpen={isOpenModal} onCancel={() => setIsOpenModal(false)}>
        <FormComponent />
      </ModalWrapper>
      <div className={styles.data__container}>
        <div className={styles.data__text_wrap}>
          <div className={styles.data__text_item}>
            <p>Зал</p>
            <p>Синий</p>
          </div>
          <div className={styles.data__text_item}>
            <p>Дата и время</p>
            <p>3 июля 13:45</p>
          </div>
          <div className={styles.data__text_item}>
            <p>Места</p>
            {dataPlaces.map((el, i) => (
              <p key={i} className={styles.data__place_item}>
                {el[0].row} ряд - {el.map(e => e.place).join(' ')}
              </p>
            ))}
          </div>
        </div>
        <p className={styles.data__price}>
          Сумма:{places.reduce((acc, el) => (acc += el.price), 0)}р
        </p>
        <Button
          className={styles.data__btn}
          onClick={() => setIsOpenModal(true)}
        >
          <p>Купить</p>
        </Button>
      </div>
    </>
  )
}

export default PlaceData
