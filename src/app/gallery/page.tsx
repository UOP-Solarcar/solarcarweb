export default function Gallery() {
    const pngCount = 7;
    const jpgCount = 80;

    const imageElements: JSX.Element[] = [];

    for (let x = 0; x <= pngCount; x++) {
        imageElements.push(
                <img key={`${x}pic png`} src={`/gallery/${x}.png`} alt={""}/>
        );
    }

    for (let y = 0; y <= jpgCount; y++) {
        imageElements.push(
                <img key={`${y}pic jpg`} src={`/gallery/${y}.jpg`} alt={""}/>
        );
    }

    return (
        <>
            <div className="flex p-5 sm:p-8">
                <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    {imageElements}
                </div>
            </div>
        </>
    );
}
