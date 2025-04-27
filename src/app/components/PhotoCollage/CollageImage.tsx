import Image from 'next/image'

type Props = {
    src: string
    alt: string
    colSpan: number
    rowSpan: number
    colStart: number
    rowStart: number
}

export const CollageImage = (props: Props) => {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            className={`object-cover h-full w-full rounded`}
            height={500}
            width={500}
            style={{
                gridColumn: `${props.colStart} / span ${props.colSpan}`,
                gridRow: `${props.rowStart} / span ${props.rowSpan}`,
            }}
        />
    )
}
