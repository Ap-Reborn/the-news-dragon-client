import React, { useEffect, useState } from 'react';

const LefttNav = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2>left nav</h2>
        </div>
    );
};

export default LefttNav;