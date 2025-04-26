import { CollageImage } from './CollageImage'

export const PhotoCollage = () => {
    return (
        <div className="grow basis-1/2 py-16 grid grid-cols-16 grid-rows-16 grid-flow-dense">
            <CollageImage
                src="/alan.jpg"
                alt="Alan, a member of Warboys Table Tennis Club"
                colSpan={6}
                rowSpan={4}
                colStart={5}
                rowStart={7}
            />
            <CollageImage
                src="/piotr.jpg"
                alt="Piotr, a member of Warboys Table Tennis Club"
                colSpan={6}
                rowSpan={4}
                colStart={7}
                rowStart={9}
            />
            <CollageImage
                src="/andrew.jpg"
                alt="Andrew, a member of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={3}
                colStart={6}
                rowStart={4}
            />
            <CollageImage
                src="/martin.jpg"
                alt="Martin, a member of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={5}
                colStart={9}
                rowStart={5}
            />
            <CollageImage
                src="/mick.jpg"
                alt="Mick, a member of Warboys Table Tennis Club"
                colSpan={4}
                rowSpan={4}
                colStart={4}
                rowStart={11}
            />
            <CollageImage
                src="/tim.jpg"
                alt="Tim, a member of Warboys Table Tennis Club"
                colSpan={2}
                rowSpan={4}
                colStart={3}
                rowStart={8}
            />
            <CollageImage
                src="/bill.jpg"
                alt="Bill, a member of Warboys Table Tennis Club"
                colSpan={2}
                rowSpan={4}
                colStart={10}
                rowStart={10}
            />
            <CollageImage
                src="/b-team-2022.jpg"
                alt="B Team 2022, a team of Warboys Table Tennis Club"
                colSpan={4}
                rowSpan={3}
                colStart={7}
                rowStart={13}
            />
            <CollageImage
                src="/colin-and-richard.jpg"
                alt="Colin and Richard, members of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={3}
                colStart={3}
                rowStart={5}
            />
            <CollageImage
                src="/aaron.jpg"
                alt="Aaron, a member of Warboys Table Tennis Club"
                colSpan={4}
                rowSpan={4}
                colStart={12}
                rowStart={8}
            />
            <CollageImage
                src="/b-team-st-georges-friendly.jpg"
                alt="B Team VS St Georges, a friendly match of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={3}
                colStart={12}
                rowStart={12}
            />
            <CollageImage
                src="/rowan-and-martin.jpg"
                alt="Rowan and Martin, members of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={3}
                colStart={12}
                rowStart={5}
            />
        </div>
    )
}
