import { ReactNode } from "react"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const tag: HTMLElementTagNameMap = {}
type props = {
    children?: ReactNode | string | number
    tag?: keyof typeof tag;
    className?: string;
    attributte?: string;
}
export const TextTagTag = ({ tag = 'p', children, className, attributte }: props) => {
    return (
        <p className={className}>
            {
                children ?
                    <>
                        <span className={`tag-${tag}`}>
                            {`<${tag}${attributte ? ' ' + attributte : ''}>`}
                        </span>
                        {children}
                        <span className={`tag-${tag}`}>
                            {`</${tag}>`}
                        </span>
                    </>
                    :
                    <span className={`tag-${tag}`}>
                        {`<${tag}${attributte ? ' ' + attributte : ''}/>`}
                    </span>
            }
        </p>
    )
}
