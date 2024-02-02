'use client'
import useUserStore from '@/store/userStore'
import { FieldType } from '@/types/forms'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import styles from './form.module.scss'

const ProfileForm = () => {
  const userData = useUserStore(state => state.user.user)
  const [data, setData] = useState({
    name: '',
    surname: '',
    faname: '',
    number: userData.phone,
  })
  return (
    <div className={styles.profile__container}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Имя"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            onChange={e => {
              setData(prev => ({ ...prev, name: e.currentTarget.value }))
            }}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Фамилия"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            onChange={e => {
              setData(prev => ({ ...prev, surname: e.currentTarget.value }))
            }}
          />{' '}
        </Form.Item>
        <Form.Item<FieldType>
          label="Отчетсво"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            onChange={e => {
              setData(prev => ({ ...prev, faname: e.currentTarget.value }))
            }}
          />{' '}
        </Form.Item>
        <Form.Item<FieldType>
          label="Номер"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            value={data.number}
            onChange={e => {
              setData(prev => ({ ...prev, number: e.currentTarget.value }))
            }}
          />{' '}
        </Form.Item>
        <Button>update</Button>
      </Form>
    </div>
  )
}

export default ProfileForm
