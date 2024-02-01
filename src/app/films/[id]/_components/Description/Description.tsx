'use client'
import classNames from 'classnames'
import { useState } from 'react'

const Description = ({ data }: { data: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="film__description">
      <p
        className={classNames({
          film__description_data: true,
          active: isOpen,
        })}
      >
        {data}
      </p>
      <p
        className="film__description_btn"
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        <span>{!isOpen ? 'Раскрыть' : 'Скрыть'}</span>
      </p>
    </div>
  )
}

export default Description
