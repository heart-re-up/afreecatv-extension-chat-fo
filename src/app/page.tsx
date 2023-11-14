'use client';

import React from 'react';
import { Button, ConfigProvider, notification, message } from 'antd';
import theme from '~/theme/theme-config';

export default function Home() {
  function showAlert() {
    notification.info({ message: 'hi', duration: 1.5, closeIcon: false });
    void message.info({ content: 'hi' });
  }

  return (
    <ConfigProvider theme={theme}>
      <div>
        <Button
          type="primary"
          onClick={() => showAlert()}
        >
          Button
        </Button>
      </div>
    </ConfigProvider>
  );
}
