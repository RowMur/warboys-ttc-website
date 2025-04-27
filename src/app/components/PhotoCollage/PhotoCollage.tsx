import { CollageImage } from './CollageImage'

export const PhotoCollage = () => {
    return (
        <div className="grow basis-1/2 grid grid-cols-16 grid-rows-16 gap-2 max-h-screen max-w-screen p-8 md:p-0 aspect-square">
            <CollageImage
                src="/b-team-2022.jpg"
                alt="B Team 2022, a team of Warboys Table Tennis Club"
                colSpan={8}
                rowSpan={6}
                colStart={6}
                rowStart={6}
            />
            <CollageImage
                src="/colin-and-richard.jpg"
                alt="Colin and Richard, members of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={5}
                colStart={14}
                rowStart={7}
            />
            <CollageImage
                src="/alan.jpg"
                alt="Alan, a member of Warboys Table Tennis Club"
                colSpan={5}
                rowSpan={5}
                colStart={6}
                rowStart={1}
            />
            <CollageImage
                src="/martin.jpg"
                alt="Martin, a member of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={6}
                colStart={14}
                rowStart={1}
            />
            <CollageImage
                src="/piotr.jpg"
                alt="Piotr, a member of Warboys Table Tennis Club"
                colSpan={5}
                rowSpan={4}
                colStart={1}
                rowStart={8}
            />
            <CollageImage
                src="/andrew.jpg"
                alt="Andrew, a member of Warboys Table Tennis Club"
                colSpan={7}
                rowSpan={5}
                colStart={1}
                rowStart={12}
            />
            <CollageImage
                src="/tim.jpg"
                alt="Tim, a member of Warboys Table Tennis Club"
                colSpan={4}
                rowSpan={5}
                colStart={8}
                rowStart={12}
            />
            <CollageImage
                src="/bill.jpg"
                alt="Bill, a member of Warboys Table Tennis Club"
                colSpan={3}
                rowSpan={5}
                colStart={11}
                rowStart={1}
            />
            <CollageImage
                src="/rowan-and-martin.jpg"
                alt="Rowan and Martin, members of Warboys Table Tennis Club"
                colSpan={5}
                rowSpan={5}
                colStart={12}
                rowStart={12}
            />
            <CollageImage
                src="/aaron.jpg"
                alt="Aaron, a member of Warboys Table Tennis Club"
                colSpan={5}
                rowSpan={4}
                colStart={1}
                rowStart={1}
            />
            <CollageImage
                src="/b-team-st-georges-friendly.jpg"
                alt="B Team VS St Georges, a friendly match of Warboys Table Tennis Club"
                colSpan={5}
                rowSpan={3}
                colStart={1}
                rowStart={5}
            />
        </div>
    )
}
