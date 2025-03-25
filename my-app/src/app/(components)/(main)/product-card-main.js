export default function ProductCardMain({ title_item_product, price_item_product, image_item_product }) {

    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img className="transition-transform duration-300 hover:scale-105 rounded-lg"
                    src={image_item_product ?? "https://lh3.googleusercontent.com/ixzTQIoSD7vZmVyrdZikEjHB4xMnkJI2Nk8juEtq6o5KYtCroW6gLkC6bxNgYlRc22ytV6V6fynEodvg737BVtEAW2vXubXb=w230-rw"}
                    alt={title_item_product ?? 'no-title'} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title_item_product}

                </h2>
                <div className="badge badge-secondary">NEW</div>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div>
                    {price_item_product ?? "200.000"}
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <div className="card-actions">
                        <button className="btn btn-accent text-white w-full text-xs">Buy Now</button>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-secondary text-white w-full text-xs">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}