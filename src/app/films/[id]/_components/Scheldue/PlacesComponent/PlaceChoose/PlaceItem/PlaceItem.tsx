import classNames from 'classnames'
import { FC } from 'react'
import styles from '../placeChoose.module.scss'
interface IPlaceItem {
  disabled: boolean
  active: boolean
  number: number
  setActive: (e: number) => void
}

const PlaceItem: FC<IPlaceItem> = ({ number, setActive, active, disabled }) => {
  return (
    <div
      onClick={() => !disabled && setActive(number)}
      className={classNames({
        [styles.choose__row_item]: true,
        [styles.choose__row_item__disabled]: disabled,
      })}
    >
      {active && (
        <div className={styles.choose__row_item__active}>
          <p>{number}</p>
        </div>
      )}
    </div>
  )
}

export default PlaceItem
