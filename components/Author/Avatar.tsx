import { FC } from "react"
import Image, { StaticImageData } from "next/image";

type PropsType = {
    url: string | StaticImageData;
    alt: string;
    size?: 'sm' | 'md' | 'lg';

}

const Avatar:FC<PropsType> = (props) => {
    const {url, alt, size = 'md'} = props
    let width = 48, height = 48
    if (size === 'sm') {
        width = 32
        height = 32
    }else if (size === 'lg') {
        width = 72
        height = 72
    }
    return (
        <Image className="inline-block rounded-full ring-2 ring-white" src={url} alt={alt} width={width} height={height} />
 
    )
}

export default Avatar