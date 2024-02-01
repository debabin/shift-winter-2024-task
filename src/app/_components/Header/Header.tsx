'use client'
import exit from '@/assets/images/exit.svg'
import logo from '@/assets/images/logo.svg'
import useUserStore from '@/store/userStore'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import styles from './header.module.scss'
const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const userData = useUserStore(state => state)
  return (
    <>
      <LoginForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link href="/">
            <div className={styles.logo}>
              <Image alt="logo" src={logo} width={102} height={39} />
            </div>
          </Link>

          <nav className={styles.nav__wrapper}>
            <ul>
              {userData.user.user._id !== '' && (
                <li className={styles.nav__item}>
                  <Link href="/profile">Профиль</Link>
                </li>
              )}

              <li
                // onClick={() => router.push("/tickets")}
                className={styles.nav__item}
              >
                <Link href="/profile">Билеты</Link>
              </li>
            </ul>
          </nav>
          <div
            className={styles.exit__btn}
            onClick={() => setIsOpenModal(true)}
          >
            <Image priority src={exit} alt="exit" width={24} height={24} />

            {userData.user.user._id === '' ? (
              <p>Войти</p>
            ) : (
              <p>{userData.user.user.phone}</p>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
