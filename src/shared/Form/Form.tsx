import { buyTicket } from '@/lib/api/ticketsApi'
import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const FormComponent: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    faname: '',
    number: '',
  })

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
          onChange={e => {
            setData(prev => ({ ...prev, number: e.currentTarget.value }))
          }}
        />{' '}
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            buyTicket()
              .then(data => console.log(data))
              .catch(err => console.log(err))
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormComponent
