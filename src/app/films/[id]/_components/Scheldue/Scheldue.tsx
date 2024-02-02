'use client'
import { useScheldue } from '@/lib/hooks/query'
import { Seance } from '@/types/scheldue'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React, { useState } from 'react'
import DatesComponent from './DatesComponent/DatesComponent'
import PlacesComponet from './PlacesComponent/PlacesComponent'
import SeancesComponent from './SeancesComponent/SeancesComponent'
import './scheldue.scss'

const Scheldue = ({ id }: { id: string }) => {
  const { data } = useScheldue('1')
  const schedules = data?.schedules
  const [date, setDate] = useState<string | null>(null)
  const [seance, setSeance] = useState<null | Seance>(null)
  const getHallSeansesHandler = (hall: string) => {
    const data = schedules
      ?.find(el => el.date === date)
      ?.seances.filter(el => el.hall.name === hall)
    return data
  }

  return schedules !== undefined ? (
    <>
      <DatesComponent setDate={setDate} data={schedules.map(el => el.date)} />
      {getHallSeansesHandler('Red')?.length !== undefined && (
        <div className="scheldue__wrap_seances">
          <SeancesComponent
            setSeance={setSeance}
            activeSeance={seance}
            seance={getHallSeansesHandler('Red')}
          />
          <SeancesComponent
            setSeance={setSeance}
            activeSeance={seance}
            seance={getHallSeansesHandler('Blue')}
          />
          <SeancesComponent
            setSeance={setSeance}
            activeSeance={seance}
            seance={getHallSeansesHandler('Green')}
          />
        </div>
      )}
      {seance !== null && <PlacesComponet places={seance?.hall.places} />}
    </>
  ) : (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  )
}

export default React.memo(Scheldue)
