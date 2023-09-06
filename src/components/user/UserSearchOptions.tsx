'use client'

import {Checkbox} from "antd";
import React, {useCallback, useState} from "react";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {produce} from "immer";

export type SearchOptions = {
    allowed: boolean
}

export function UserSearchOptions(props: { onOptionsChanged: (options: SearchOptions) => void }) {

    const [state, setState] = useState({
        connected: true,
        paid: false
    });
    const onCheckboxChange = useCallback((e: CheckboxChangeEvent) => {
        setState(produce(state, draft => {
            const target = e.target;
            if (target == null) return
            const name = target.name ?? ''
            const value = target.type === 'checkbox' ? target.checked : target.value
            console.log(draft)
            draft[name] = value
            // setState((prevState) => ({...prevState, [name]: value}))
        }))
    }, []);

    return (
        <>
            <div className={'flex flex-row'}>
                <Checkbox
                    value={() => state.connected}
                    name={'connected'}
                    title={'접속중'}
                    onChange={onCheckboxChange}
                >접속중</Checkbox>
                <Checkbox
                    value={state.paid}
                    name={'paid'}
                    title={'유료회원'}
                    onChange={onCheckboxChange}
                >접속중</Checkbox>
            </div>
            <div>
                {JSON.stringify(state, null, 4)}
            </div>
        </>
    );
}
