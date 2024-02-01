'use client'

import { createOtp, login } from '@/lib/api/userApi'
import ModalWrapper from '@/shared/Modal/Modal'
import useUserStore from '@/store/userStore'
import { FieldType } from '@/types/forms'
import { Button, Form, Input } from 'antd'
import { Dispatch, FC, SetStateAction, useState } from 'react'

interface ILoginForm {
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

const LoginForm: FC<ILoginForm> = ({ isOpenModal, setIsOpenModal }) => {
  const [number, setNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [isGetOtp, setIsGetOtp] = useState(false)
  const user = useUserStore(state => state)
  return (
    <ModalWrapper
      title="Войти"
      isOpen={isOpenModal}
      onCancel={() => setIsOpenModal(false)}
    >
      {!isGetOtp ? (
        <>
          <Form.Item<FieldType>
            label="Номер"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              value={number}
              onChange={e => {
                setNumber(prev => e.currentTarget.value)
              }}
            />
          </Form.Item>
          <Button
            onClick={() =>
              createOtp(number).then(e => {
                e.success ? setIsGetOtp(true) : alert('alert otp')
              })
            }
          >
            Получить otp
          </Button>
        </>
      ) : (
        <>
          <Form.Item<FieldType>
            label="Otp"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              value={otp}
              onChange={e => {
                setOtp(prev => e.currentTarget.value)
              }}
            />
          </Form.Item>
          <Button
            onClick={() =>
              login(number, otp)
                .then(e => {
                  user.setUser(e as any)
                  setNumber('')
                  setOtp('')
                  setIsOpenModal(false)
                })
                .catch(err => {
                  setNumber('')
                  setOtp('')
                  alert('Не')
                })
            }
          >
            Войти
          </Button>
        </>
      )}

      {/* <Button
        onClick={() =>
          auth(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijg5MDAwMDAwMDAwIiwiaWF0IjoxNzA2Nzg0NDM3fQ.9hRgNI5nPlYGMq0OSmKYI9a9KnJZUsoCaQgiSM4BiBc"
          )
        }
      >
        sign
      </Button> */}
    </ModalWrapper>
  )
}

export default LoginForm
