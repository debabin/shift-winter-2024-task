import { Modal } from 'antd'
import React, { FC } from 'react'

interface IModalWrapper {
  children: React.ReactNode
  isOpen: boolean
  onCancel: () => void
  title: string
}

const ModalWrapper: FC<IModalWrapper> = ({
  children,
  isOpen,
  onCancel,
  title,
}) => {
  return (
    <Modal footer={null} title={title || ''} open={isOpen} onCancel={onCancel}>
      {children}
    </Modal>
  )
}

export default ModalWrapper
