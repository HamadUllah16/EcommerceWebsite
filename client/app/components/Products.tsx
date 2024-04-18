"use client"
import { Favorite } from "@mui/icons-material";
import Image from "next/image";

const productPicture = "/shirt.png"

const products = [
    { name: "Product 1", price: 10, image: productPicture },
    { name: "Product 1", price: 10, image: productPicture },
    { name: "Product 1", price: 10, image: productPicture },
    { name: "Product 1", price: 10, image: productPicture },
]

function Products() {
    return (
        <>
            {
                products.map((item: { name: string, price: number, image: string }, index: number) => {
                    return (
                        <div key={index} className="flex flex-col gap-3 rounded">
                            <div className="flex border p-5 rounded-lg justify-center" style={{ backgroundColor: "#f0eeed" }}>
                                <Image src={item.image} width={300} height={150} alt="a product picture" />
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
