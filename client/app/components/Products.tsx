"use client"
import Image from "next/image";
import GenerateStars from "./GenerateStars";

const productPicture = "/shirt.png"

const products = [
    { name: "Product 1", price: 10, image: productPicture, rating: 4.5 },
    { name: "Product 1", price: 10, image: productPicture, rating: 3.5 },
    { name: "Product 1", price: 10, image: productPicture, rating: 5.0 },
    { name: "Product 1", price: 10, image: productPicture, rating: 4.5 },
]

function Products() {
    return (
        <>
            {
                products.map((item: { name: string, price: number, image: string, rating: number }, index: number) => {
                    return (
                        <div key={index} className="flex flex-col gap-3 rounded">
                            <div className="flex flex-shrink-0 border p-5 rounded-3xl justify-center items-center w-60 md:w-72" style={{ backgroundColor: "#f0eeed" }}>
                                <Image className="drop-shadow-lg" src={item.image} width={400} height={400} alt="a product picture" />
                            </div>
                            <div>
                                <GenerateStars item={item.rating} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{item.name}</h3>
                                <h5 className="font-bold text-2xl">${item.price}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Products
