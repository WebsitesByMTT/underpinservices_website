import Image from 'next/image'
import { type ImageProps } from 'next/image'

interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
    className?: string
}

const Logo = ({ width = 1000, height = 1000, className, ...props }: LogoProps) => {
    return (
        <Image
            src="/logo.png"
            width={width}
            height={height}
            quality={100}
            alt="underpin-services-logo"
            priority
            className={className}
            {...props}
        />
    )
}

export default Logo