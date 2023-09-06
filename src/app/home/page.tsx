'use client'

import {App, Button, ConfigProvider, Modal} from "antd";
import theme from "@/theme/theme-config";
import React from "react";

export default function Page() {

    function onButtonClicked(e: React.MouseEvent<HTMLElement>) {
        Modal.info({title: '버튼 클릭됨', centered: true})
    }

    return (
        <ConfigProvider theme={theme}>
            <App>
                <Button type="primary" onClick={onButtonClicked}>Button</Button>
            </App>
        </ConfigProvider>
    )

}
