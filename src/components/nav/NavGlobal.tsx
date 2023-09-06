'use client'
import {AppstoreOutlined, CheckOutlined, HomeOutlined, MonitorOutlined, UserOutlined} from '@ant-design/icons'
import type {MenuProps, MenuTheme} from "antd";
import React, {useCallback, useState} from "react";
import {Menu, Switch} from "antd";
import {useRouter} from "next/navigation";

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('홈', 'home', <HomeOutlined/>, [
        getItem('대시보드', 'dashboard')
    ]),
    getItem('사용자', 'users', <UserOutlined/>, [
        getItem('사용자 목록', 'list'),
    ]),
    getItem('모니터링', 'monitoring', <MonitorOutlined/>, []),
    getItem('위젯', 'widgets', <AppstoreOutlined/>, []),
    getItem('결제', 'payments', <CheckOutlined/>, []),
]

export function NavGlobal() {
    const [theme, setTheme] = useState<MenuTheme>('dark')
    const [current, setCurrent] = useState('dashboard');

    const changeTheme = (value: boolean) => setTheme(value ? 'dark' : 'light')
    const router = useRouter()
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        router.push('/' + e.keyPath.reverse().join('/'))
    };

    return (
        <div className={'h-full'}>
            <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren={'Dark'}
                unCheckedChildren={'Light'}
            />
            <br/>
            <br/>
            <Menu
                className={'h-full'}
                theme={theme}
                onClick={onClick}
                style={{width: 256}}
                defaultOpenKeys={['home']}
                selectedKeys={[current]}
                mode={'inline'}
                items={items}
            />
        </div>
    );
}
