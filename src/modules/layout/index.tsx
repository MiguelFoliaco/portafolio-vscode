import { ReactNode } from "react"
import { Header } from "./components/header"
import { LeftBar } from "./components/leftbar"

type props = {
    children: ReactNode
}
export const LayoutVSCode = ({ children }: props) => {
    return (
        <div className="container-global">
            <Header />
            <div className="file">
                {children}
            </div>
            <LeftBar />
        </div>
    )
}
