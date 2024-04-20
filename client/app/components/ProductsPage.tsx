import Products from "./Products"

function ProductsPage({ title }: { title: string }) {
    return (
        <section className="container mx-auto flex flex-col py-24 gap-16">
            <div className="flex justify-center">
                <h1 className="font-extrabold uppercase text-5xl">{title}</h1>
            </div>
            <article className="flex gap-3">
                <Products />
            </article>
            <div className="flex justify-center">
                <button className="border py-4 px-20 rounded-full font-semibold">View All</button>
            </div>
        </section>
    )
}

export default ProductsPage
