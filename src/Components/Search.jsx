import { useEffect, useState } from "react"
import Banner from '../assets/images/banner.jpg';
import {  IoSearchOutline } from "react-icons/io5";

const Search = ({selectedTag}) => {

    const tags=[
        {
            id:1,
            name:'All',
        },
        {
            id:2,
            name:'React',
        },
        {
            id:3,
            name:'React Native',
        },
        {
            id:4,
            name:'Angular',
        },
        {
            id:5,
            name:'UI/UX',
        },
    ]

    const [activeIndex,setActiveIndex]=useState(0);

  return (
    <div>
        <img src={Banner} alt="" />
        <div>
            <IoSearchOutline />
            <input type="text" placeholder="Search" />
        </div>
        <div>
            {tags.map((item, index) => (
                <ul 
                    key={item.id}
                    onClick={()=>{setActiveIndex(index);selectedTag(item.name)}} 
                >
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Search
