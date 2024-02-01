import { getAllFilms } from '@/lib/api/filmsApi'
import FilmCard from './_components/FilmCard/FilmCard'
import styles from './page.module.scss'

export default async function Home() {
  const res = await getAllFilms()
  return (
    <>
      <div className={styles.films__container}>
        <h1>Афиша</h1>
        <div className={styles.films__wrap}>
          {res.films.map(el => {
            return <FilmCard key={el.id} film={el} />
          })}
        </div>
      </div>
    </>
  )
}
