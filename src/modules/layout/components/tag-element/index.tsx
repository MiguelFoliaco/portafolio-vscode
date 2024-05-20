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
        <p className={`p-tag ${className}`} style={{ display: tag === 'div' ? 'flex' : 'inherit' }}>
            {
                children ?
                    <>
                        <span className={`tag-${tag}`}>
                            {`<${tag}${attributte ? ' ' + attributte : ''}>`}
                        </span>
                        {
                            tag !== 'div' ?
                                children
                                :
                                <div className={`container-content-${className}`} >
                                    {children}
                                </div>
                        }
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
