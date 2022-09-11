import React from 'react'

const Navbar = ({ filterItems, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn_group">

                    {
                        menuList.map((curElem) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterItems(curElem)}> {curElem}</button>
                            );
                        })
                    }

                    {/* <button className="btn-group__item" onClick={() => filterItems("evening")}>evening</button>
                    <button className="btn-group__item" onClick={() => filterItems("lunch")}>lunch</button>
                    <button className="btn-group__item" onClick={() => filterItems("dinner")}>dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>all</button> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;