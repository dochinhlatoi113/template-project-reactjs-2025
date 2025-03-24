export default function ProductCardMain() {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src="https://lh3.googleusercontent.com/ixzTQIoSD7vZmVyrdZikEjHB4xMnkJI2Nk8juEtq6o5KYtCroW6gLkC6bxNgYlRc22ytV6V6fynEodvg737BVtEAW2vXubXb=w230-rw"
                    alt="product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
}