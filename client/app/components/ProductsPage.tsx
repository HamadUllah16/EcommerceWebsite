import { Favorite } from "@mui/icons-material";

function ProductsPage() {
    return (
        <section className="col-auto">
            <article className="flex">
                <div className="w-80 border p-5 flex flex-col gap-3 rounded">
                    <h3 className="font-bold">Product</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sunt eligendi cupiditate ea debitis, quia rerum sequi nobis! Non iste laudantium ut autem sit dolorum temporibus mollitia repudiandae nam quisquam.</p>
                    <div className="flex items-center justify-between gap-3">
                        <h5>$10</h5>
                        <div className="flex gap-2">
                            <button className="shadow border rounded p-1">Add to Cart</button>
                            <div className="shadow border p-1 rounded w-auto">
                                <Favorite />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ProductsPage
