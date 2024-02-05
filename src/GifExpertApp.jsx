import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (onAddCategory) => {
        if (categories.includes(onAddCategory)) {
            return
        }
        setCategories([onAddCategory, ...categories])
    }

    return (
        <>

            <h1>Gif App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            ></AddCategory>

            <ol>
                {categories.map((category) => {
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                })}
            </ol>
        </>
    )
}
