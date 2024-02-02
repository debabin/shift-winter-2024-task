import Image from 'next/image'
import { FC } from 'react'
import './filmImg.scss'

interface IFilmImg {
  url: string
}

const FilmImg: FC<IFilmImg> = ({ url }) => {
  return (
    <div className="img__container">
      <Image layout="fill" priority src={process.env.DB_URL + url} alt="img" />{' '}
      <div className="img__desc">
        <p>фантастика</p>
        <p>США, 2023</p>
      </div>
    </div>
  )
}

export default FilmImg
