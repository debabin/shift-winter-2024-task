'use client'
import { getShortDate } from '@/lib/helpers/date/date'
import { Radio } from 'antd'
import { Dispatch, FC, SetStateAction } from 'react'

interface IDatesComponent {
  data: string[]
  setDate: Dispatch<SetStateAction<string | null>>
}

const DatesComponent: FC<IDatesComponent> = ({ data, setDate }) => {
  return (
    <Radio.Group
      onChange={e => {
        setDate(e.target.value)
      }}
      defaultValue="a"
    >
      {data.map((el, i) => (
        <Radio.Button key={i} value={el}>
          {getShortDate(el)}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}

export default DatesComponent
