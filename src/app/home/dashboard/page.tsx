'use client'

import {App, Button, ConfigProvider, Modal} from "antd";
import theme from "@/theme/theme-config";
import React from "react";
import {PageTitle} from "@/components/page/PageTitle";

export default function Page() {

    function onButtonClicked(e: React.MouseEvent<HTMLElement>) {
        Modal.info({title: '버튼 클릭됨', centered: true})
    }

    return (
        <ConfigProvider theme={theme}>
            {/*<App>*/}
            <PageTitle title={'대시보드'}/>
            <Button type="primary" onClick={onButtonClicked}>Button</Button>
            {/*</App>*/}
        </ConfigProvider>
    )

}
