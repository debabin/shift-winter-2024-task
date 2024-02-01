import { Seance } from '@/types/scheldue'
import { Button } from 'antd'
import { Dispatch, FC, SetStateAction } from 'react'
import './seance.scss'

interface ISeancesComponent {
  seance: Seance[] | undefined
  activeSeance: Seance | null
  setSeance: Dispatch<SetStateAction<Seance | null>>
}

const SeancesComponent: FC<ISeancesComponent> = ({
  seance,
  setSeance,
  activeSeance,
}) => {
  return (
    seance && (
      <div>
        <p className="seance__title">Hall {seance[0].hall.name}</p>
        <div className="seance__wrap">
          {seance.map(el => (
            <Button
              onClick={() => setSeance(el)}
              type={activeSeance?.time === el.time ? 'primary' : 'default'}
              key={el.time}
            >
              {el.time}
            </Button>
          ))}
        </div>
      </div>
    )
  )
}

export default SeancesComponent
