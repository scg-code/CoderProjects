import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = () => {
    const [categories, setCategories] = useState(['Food', 'Gaming', 'Coding', 'Other']);

    return (
        <React.Fragment>
            <h3>Please select a category:</h3>
            <ul>
                {categories.map((cat, index) => (
                    <li key={index}>
                        <Link to={`/entry/new/${index}`}>{cat}</Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default CategorySelection