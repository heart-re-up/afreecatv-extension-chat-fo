import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: '게임 관리',
    description: '여러 게임의 상태를 관리합니다.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            {/*<NavGames></NavGames>*/}
            {children}
        </div>
    )
}
