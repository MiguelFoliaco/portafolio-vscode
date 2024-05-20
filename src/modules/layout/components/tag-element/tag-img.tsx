type props = {
    tag?: 'img';
    src: string;
    alt?: string;
    className?: string;
    attributte?: string;
}
export const ImageTag = ({ tag = 'img', className, attributte, src, alt }: props) => {

    return (
        <p className={`p-tag container-${className}`}>
            <span className={`tag-${tag}`}>
                {`<${tag}${attributte ? ' ' + attributte : ''}/>`}
            </span>
            <img className={`img-${className}`} src={src} alt={alt} />
        </p>
    )
}
