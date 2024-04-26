import { ReactNode } from "react"
import { Header } from "./components/header"
import { LeftBar } from "./components/leftbar"

type props = {
    children: ReactNode
}
const arr = new Array<number>(30);
for (let i = 0; i < 30; i++) {
    arr.push(i)
}

export const LayoutVSCode = ({ children }: props) => {
    return (
        <div className="container-global">
            <Header />
            <div className="counter">
                {
                    arr.map(e => (
                        <p>{e}</p>
                    ))
                }
            </div>
            <div className="file">
                {children}
            </div>
            <LeftBar />
        </div>
    )
}
