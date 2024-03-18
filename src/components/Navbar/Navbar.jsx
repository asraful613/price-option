import { useState } from "react";
import Link from "../link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { FaSkullCrossbones } from "react-icons/fa";
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" }, 
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (
        <div>
            <nav>
                <div className="md:hidden text-xl" onClick={()=>setOpen(!open)}>
                    {
                        open ===true?
                        <RiMenu2Line/>:
                        <FaSkullCrossbones />
                    }
                {/* <RiMenu2Line className="text-xl " /> */}
                </div>
                <ul className="md:flex">
                    {routes.map(route => <Link  key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
