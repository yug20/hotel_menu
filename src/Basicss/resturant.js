import React, { useState } from 'react';
import './resturant.css';
import Menu from './menuapi.js';
import MenuCard from '../Basicss/menucard.js';
import Navbar from './Nav.js';
// import UseState from '../../component/Hooks/UseState.js';

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
        return curElem.category;
    })),
    "All",
];

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);

    const [menuList] = useState(uniqueList);
    // const [menuList, steMenuList] = useState(uniqueList);

    const filterItems = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updateList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateList);
    };

    return (
        <>
            {/* <UseState /> */}
            <Navbar filterItems={filterItems} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Resturant;