import React, { useState, useEffect } from "react";

const categories = {
    apparel: ["blouse", "dress", "skirt", "pants"],
    accessories: ["shoes", "platforms", "backpack", "bag"]
};

const CategoryDropdown = (props) => {
    const [categoryData, setCategoryData] = useState(["apparel"]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const checkInsertInArray = newCategory => {
        let findStatus = categoryData.find(x => {
            return x === newCategory;
        });
        if (!findStatus) {
            setCategoryData([...categoryData, newCategory]);
        }
    };

    const categoryChange = event => {
        if (event.target.value) {
            setSelectedCategory(event.target.value);
        }
        props.onCategoryChange(event)
    };

    useEffect(() => {
        Object.keys(categories).forEach(category => {
            checkInsertInArray(category);
        });
    });

    return (
        <>
            {/* <span>Category:</span> */}
            <select onChange={categoryChange} className="w-60 rounded-md">
                <option value="">Select Category...</option>
                {categoryData.map((allCategories, index) => {
                    return <option key={index} value={allCategories}>{allCategories}</option>;
                })}
            </select>
            {selectedCategory ? (
                <>
                    
                    <select className="w-60 rounded-md" onChange={props.onSubcategoryChange}>
                        <option value="">Select subcategory... </option>
                        {categories[selectedCategory].map((allCategories, indx) => {
                            return <option key={indx} value={allCategories}>{allCategories}</option>;
                        })}
                    </select>
                </>
            ) : (
                <p className="text-pink-600 text-base -mt-2">Please select a category</p>
            )}
        </>
    );
};

export default CategoryDropdown;