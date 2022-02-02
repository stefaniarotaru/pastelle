import { useEffect, useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import React from 'react'
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ColorsCheck from "../components/ColorsCheck";
import CategoryDropdown from "../components/CategoryDropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

const Admin = () => {



    const url = "http://localhost:8080/product/add-product"

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [sale, setSale] = useState(false);
    const [subcategory, setSubcategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [salePrice, setSalePrice] = useState("");


    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required.'),
        name: Yup.string()
            .required('Product name is required.'),
        price: Yup.string()
            .required('Price is required.'),
        imageUrl: Yup.string()
            .required('Image URL is required.'),
        chooseColor: Yup.string()
            .required('Please select at least one color.'),
        sale: Yup.boolean().required().oneOf([0 , 1], 'Please specify if the item is on sale.')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        console.log("added product")
        return false;
    }

    const addProduct = () => {
        axios.post(url, {
            'name': name,
            'category': category,
            'color': color,
            'price': price,
            'sale': sale,
            'subcategory': subcategory,
            'url': imageUrl,
            'salePrice': salePrice
        })
            .then((res) => console.log(res.data))
    }

    return (
        <>
            <Navbar />
            <div className="grid lg:grid-cols-2 grid-cols-1 text-xl font-light">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-20 ml-28 md:ml-48 flex flex-col gap-y-4">
                        <p className="font-bold">Add new product
                        </p>



                        <input placeholder="Product Name"
                            name="name"
                            type="text" {...register('name')}
                            className={`w-60 rounded-md ${errors.name ? 'border-pink-600 border-2' : ''}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)} />


                        <div className="text-pink-600 text-base -mt-2">{errors.name?.message}</div>

                        <CategoryDropdown
                            onCategoryChange={(e) => setCategory(e.target.value)}
                            onSubcategoryChange={(e) => setSubcategory(e.target.value)}
                        />


                        <p className="">
                            Select colors:
                        </p>

                        <ColorsCheck value={color}
                            onChange={(e) => { console.log(e.target.value); setColor(e.target.value) }}
                            name="chooseColor"
                            // {...register('chooseColor')}
                            className={` ${errors.chooseColor ? 'border-pink-600 border-2' : ''}`}
                        />


                        <div className="text-pink-600 text-base -mt-2">{errors.chooseColor?.message}</div>

                        {/* <input type="text"
                            value={price}
                            placeholder="Price"
                            className="border w-60 mt-6"
                            onChange={(e) => setPrice(e.target.value)}></input> */}

                        <input placeholder="Price"
                            name="price"
                            type="text" {...register('price')}
                            className={`w-60 rounded-md ${errors.price ? 'border-pink-600 border-2' : ''}`}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />

                        <div className="text-pink-600 text-base -mt-2">{errors.price?.message}</div>

                        Is this item on sale?
                        <div className="flex flex-row gap-x-4 items-center">

                            <input type="radio" id="yes" name="option" value={sale} onChange={(e) => setSale(true)} />
                            <label for="option1">Yes</label>
                            <input type="radio" id="no" name="option" value={sale} onChange={(e) => setSale(false)} />
                            <label for="option2">No</label>

                        </div>

                        <input placeholder="Image URL"
                            name="imageUrl"
                            type="text" {...register('imageUrl')}
                            className={`w-60 rounded-md ${errors.imageUrl ? 'border-pink-600 border-2' : ''}`}
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)} />

                        <div className="text-pink-600 text-base -mt-2">{errors.imageUrl?.message}</div>

                        <input type="text"
                            placeholder="Sale price (if applicable)"
                            className="rounded-md w-60"
                            value={salePrice}
                            onChange={(e) => { console.log(e.target.value); setSalePrice(e.target.value) }} />

                        <div className="flex gap-x-2">
                            <button type="submit"
                                className="bg-pink-400 hover:bg-pink-500 w-60 rounded-lg p-3"
                                onClick={addProduct}>

                                <p className="font-bold text-white">
                                    Add product
                                </p>
                            </button>
                            <button type="button" onClick={() => reset()}
                                className="bg-gray-400 hover:bg-gray-500 w-20 rounded-lg p-3 text-white">Reset</button>

                        </div>

                    </div>
                </form>

                <div>
                    <h3 className="mt-20 font-bold">Your product preview will appear here</h3>
                    <div className="ml-40 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>


                    {(name === '' && price === '' && imageUrl === '') ?
                        <div className="ml-32 mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="#f9a8d4">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div> :
                        <div className="my-20 flex flex-col w-full">
                            <div className="shadow-lg rounded-lg bg-white w-80 md:ml-2 ml-6 md:-mt-6">

                                <img className="rounded-tl-lg rounded-tr-lg" src={imageUrl} />

                                <div className="p-5">
                                    <h3>{name}</h3>
                                    {salePrice === '' ? '' :
                                        <h3 className="text-green-500 text-xl">${salePrice}</h3>
                                    }
                                    {price === '' ? '' :
                                        <h3 className={`text-lg ${sale ? 'line-through' : ''}`}>${price}</h3>
                                    }


                                    <div className="flex flex-row my-3">

                                    </div>
                                </div>
                            </div>
                        </div>}


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Admin
