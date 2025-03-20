export default function Slider() {
    let imageElements = [];
    let images = "./banner/banner1.webp" ;
    for (let index = 0; index < 4; index++) {
        imageElements.push(<img className="px-3 w-[20%]" key={index} src={images} alt={`Banner ${index + 1}`} />);
    }

    return (
        <div className="container mx-auto flex justify-center relative bottom-17 left-0 items-center">
            {imageElements}
        </div>
    )
}