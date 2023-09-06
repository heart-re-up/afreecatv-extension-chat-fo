'use client'

import {useState} from "react";

export function Logout() {
    const [st1, setSt1] = useState(100);

    function increase() {
        setSt1(st1 + 1)
    }

    return (
        <div>
            <div>logout component state: {st1}</div>
            <button className={'py-2 px-4 border bg-amber-200 rounded text-zinc-700 shadow shadow-amber-700 active:scale-95'} onClick={increase}>증가</button>
        </div>
    );
}
