'use client';

import { Button, ConfigProvider, Modal } from 'antd';
import { useState } from 'react';
import theme from '~/theme/theme-config';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider theme={theme}>
      <>
        <Button
          type="primary"
          onClick={showModal}
        >
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    </ConfigProvider>
  );
}
