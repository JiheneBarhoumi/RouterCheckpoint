import React from 'react';
import {useState} from 'react';
import Item from './Item.js';
import {Link , Route} from 'react-router-dom';



const Category=({match})=>{

    const [categories,setcategories]=useState([
       
        {id:1,
        name:'shoes'
        },
        {id:2,
        name:'boots'
        },
        {
         id:3,
         name:'footwear'
        }

    ]
)

    return(<div>
    <ul>
     {categories.map(category=><li><Link to={`/category/${category.name}`}>{category.name}</Link></li>)} 
    </ul>
    <Route path={`/category/:itemname`} render={(props)=><Item categories={categories} {...props}/>}/>
   </div>)
}

export default Category;