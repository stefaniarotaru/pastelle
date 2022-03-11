import { useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import React from 'react'
import axios from "axios";
import ColorsCheck from "../components/ColorsCheck";
import CategoryDropdown from "../components/CategoryDropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import initialSizes from "../components/InitialSizes";

const Admin = () => {

    const url = "http://localhost:8080/product/add-product"

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [sale, setSale] = useState(false);
    const [subcategory, setSubcategory] = useState("");
    const [imageUrls, setImageUrls] = useState([]);
    const [salePrice, setSalePrice] = useState("");
    const [sizes, setSizes] = useState(initialSizes);

    const [amount, setAmount] = useState(1);
    const loadMore = () => {
        setAmount((prevAmount) => prevAmount + 1);
    }

    const toggleSizeAvailability = (size) => {
        const newSizes = [...sizes];
        newSizes.forEach(s => {
            if (s.name === size.name) {
                s.available = !s.available;
            }
        })
        setSizes(newSizes);
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required.'),
        name: Yup.string()
            .required('Product name is required.'),
        price: Yup.string()
            .required('Price is required.'),
        imageUrls: Yup.string()
            .required('Image URL is required.'),
        chooseColor: Yup.string()
            .required('Please select at least one color.'),
        sale: Yup.boolean().required().oneOf([0, 1], 'Please specify if the item is on sale.')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        console.log("added product")
        return false;
    }

    const getAvailableSizes = (sizes) => {
        return sizes.filter(s => s.available).map(s => s.name);
    }

    const calculatePercent = (num, percentage) => {
        return (num * (percentage / 100));
    }

    const truncateNumber = (num) => {
        num = num.toString()
        return num.slice(0, (num.indexOf(".")) + 3)
    }

    const [percentage, setPercentage] = useState(1);

    let calculateSale = calculatePercent(price, percentage);
    let finalSalePrice = truncateNumber(price - calculateSale);

    const addProduct = () => {
        const availableSizes = getAvailableSizes(sizes);
        console.log(imageUrls)
        axios.post(url, {
            'name': name,
            'category': category,
            'color': color,
            'price': price,
            'sale': sale,
            'subcategory': subcategory,
            'imageUrls': imageUrls,
            'percentage': percentage,
            'salePrice': salePrice,
            'sizes': availableSizes
        })
            .then((res) => console.log(res.data))
    }

    const updateImage = (i, url) => {
        const newImageUrls = [...imageUrls];
        newImageUrls[i] = url;
        console.log(newImageUrls)
        setImageUrls(newImageUrls)
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="grid lg:grid-cols-2 grid-cols-1 text-xl font-light">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-20 ml-28 md:ml-48 flex flex-col gap-y-4">
                        <p className="font-bold">Add new product
                        </p>

                        {/* Name */}
                        <input placeholder="Product Name"
                            name="name"
                            type="text" {...register('name')}
                            className={`w-60 rounded-md ${errors.name ? 'border-pink-600 border-2' : ''}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <div className="text-pink-600 text-base -mt-2">{errors.name?.message}</div>

                        {/* Category */}
                        <CategoryDropdown
                            onCategoryChange={(e) => setCategory(e.target.value)}
                            onSubcategoryChange={(e) => setSubcategory(e.target.value)}
                        />

                        {/* Color */}
                        <p className="-mb-2">
                            Select color:
                        </p>
                        <ColorsCheck value={color}
                            onChange={(e) => { console.log(e.target.value); setColor(e.target.value) }}
                            name="chooseColor"
                            // {...register('chooseColor')}
                            className={` ${errors.chooseColor ? 'border-pink-600 border-2' : ''}`}
                        />
                        <div className="text-pink-600 text-base -mt-2">{errors.chooseColor?.message}</div>

                        {/* Size */}
                        <p className="-mb-2 mt-2">
                            Select available sizes:
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-4 w-60">
                            {sizes.map((size, i) => <button key={i} onClick={() => toggleSizeAvailability(size)}
                                value={size.name}
                                type="button"
                                className={` hover:bg-pink-400 text-white rounded-lg text-base w-12 ${size.available ? `bg-pink-500` : 'bg-pink-300'} `}>
                                {size.displayName}</button>)}
                        </div>



                        {/* Price */}
                        <input placeholder="Price"
                            name="price"
                            type="text" {...register('price')}
                            className={`w-60 rounded-md ${errors.price ? 'border-pink-600 border-2' : ''}`}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />

                        <div className="text-pink-600 text-base -mt-2">{errors.price?.message}</div>

                        {/* Sale */}
                        <div className="flex flex-col">
                            <div>
                                <p>Is this item on sale?</p>
                                <div className="flex flex-row gap-x-4 items-center">
                                    <input type="radio" id="yes" name="option" value={sale} onChange={(e) => setSale(true)} className='form-radio text-pink-600' checked={sale} />
                                    <label for="option1">Yes</label>
                                    <input type="radio" id="no" name="option" value={sale} onChange={(e) => setSale(false)} className='form-radio text-pink-500' />
                                    <label for="option2">No</label>
                                </div>
                            </div>

                            {/* <div className="text-pink-600 text-base mt-2">{errors.sale?.message}</div> */}

                            {sale ?

                                <div className="items-center mt-4">
                                    <p>Sale percentage:</p>
                                    <input type="text"
                                        placeholder="Sale %"
                                        className="rounded-md w-20 mt-2"
                                        value={percentage}
                                        onChange={(e) => { setPercentage(e.target.value); setSale(true) }} />
                                    <button type="button"
                                        className="bg-pink-300 hover:bg-pink-400 rounded-lg px-3 py-2 text-white ml-4"
                                        onClick={() => { setSalePrice(finalSalePrice); console.log("SalePrice: " + finalSalePrice) }}>Calculate</button>
                                </div>
                                : ''}
                        </div>

                        {/* Images */}
                        <div className="flex lg:flex-row flex-col">
                            <div className="flex flex-row items-center">
                                <input placeholder="Image URL"
                                    name="imageUrl"
                                    key={0}
                                    type="text" {...register('imageUrls')}
                                    className={`w-60 h-10 rounded-md my-4 ${errors.imageUrls ? 'border-pink-600 border-2' : ''}`}
                                    // value={imageUrls[0]}
                                    onChange={(e) => updateImage(0, e.target.value)} />

                                <div className="text-pink-600 text-base">{errors.imageUrls?.message}</div>
                                <button className="bg-pink-300 p-1 rounded-lg text-white ml-2"
                                    type="button"
                                    onClick={() => loadMore}
                                >+</button>
                            </div>



                            {/* {imageUrls.length === 0 || imageUrls[0] === '' ? '' :
                                <div className="flex flex-col gap-y-4 lg:ml-4 lg:-mt-11">
                                    <input placeholder="Additional URL (Optional)"
                                        name="extra_url1"
                                        type="text"
                                        className="w-60 rounded-md"
                                        onChange={(e) => updateImage(1, e.target.value)} />

                                    <input placeholder="Additional URL (Optional)"
                                        name="extra_url1"
                                        type="text"
                                        className="w-60 rounded-md"
                                        onChange={(e) => updateImage(2, e.target.value)} />

                                    <input placeholder="Additional URL (Optional)"
                                        name="extra_url1"
                                        type="text"
                                        className="w-60 rounded-md"
                                        onChange={(e) => updateImage(3, e.target.value)} />
                                </div>} */}
                        </div>

                        {/* Add button */}
                        <div className="flex gap-x-4">
                            <button type="submit"
                                className="bg-pink-400 hover:bg-pink-500 w-60 rounded-lg p-3"
                                onClick={addProduct}>

                                <p className="font-bold text-white">
                                    Add product
                                </p>
                            </button>
                            <button type="reset" onClick={() => reset()}
                                className="bg-gray-400 hover:bg-gray-500 w-20 rounded-lg p-3 text-white">Reset</button>
                        </div>

                    </div>
                </form>

                {/* Preview */}
                <div>
                    <h3 className="mt-20 font-bold">Your product preview will appear here</h3>
                    <div className="ml-40 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>


                    {(name === '' && price === '' && (imageUrls.length === 0 || imageUrls[0] === '')) ?
                        <div className="ml-32 mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="#f9a8d4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div> :
                        <div className="my-20 flex flex-col w-full">
                            <div className="shadow-lg rounded-lg bg-white w-80 md:ml-2 ml-6 md:-mt-6">

                                <img className="rounded-tl-lg rounded-tr-lg" src={imageUrls[0]} />

                                <div className="p-5">
                                    <h3>{name}</h3>
                                    {salePrice === '' ? '' :
                                        <h3 className="text-green-500 text-xl">${salePrice}</h3>
                                    }
                                    {price === '' ? '' :
                                        <h3 className={`text-lg ${sale ? 'line-through' : ''}`}>${price}</h3>
                                    }

                                </div>
                            </div>
                        </div>}


                </div>
            </div>
        </>
    )
}

export default Admin
