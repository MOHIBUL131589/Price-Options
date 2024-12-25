import { IoMenu, IoCloseOutline } from "react-icons/io5";

import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { path: '/home', id: '1', name: 'Home Page' },
        { path: '/about', id: '2', name: 'About Us' },
        { path: '/services', id: '3', name: 'Our Services' },
        { path: '/contact', id: '4', name: 'Contact Us' },
        { path: '/blog', id: '5', name: 'Blog' }
    ];

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden bg-yellow-200 p-6 text-black" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <IoCloseOutline className="text-2xl"></IoCloseOutline> 
                    : <IoMenu className="text-2xl"></IoMenu>
                }
                

            </div>
            <ul className={`md:flex absolute md:static duration-1000
            ${open ? 'top-16' : '-top-64'}
            bg-yellow-200 px-6 text-black`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;