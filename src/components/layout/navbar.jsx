import { RiHomeLine } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Navbar() {
    const itemNavbar = [
        {
            href: "/home",
            icon: <RiHomeLine className="cursor-pointer" size={50} />
        },
        {
            href: "/location",
            icon: <CiLocationOn className="cursor-pointer" size={50} />

        },
        {
            href: "/history",
            icon: <BsTruck className="cursor-pointer" size={50} />
        },
        {
            href: "/profile",
            icon: <CgProfile className="cursor-pointer" size={50} />

        },
    ]
    return (
        <div className="py-6 px-[26px] max-w-sm w-full text-white justify-around items-center fixed bottom-0 bg-blueMain flex gap-[58px]">
            {
                itemNavbar.map((item) => {
                    return (
                        <Link to={item.href}>
                            {item.icon}
                        </Link>
                    )
                })
            }
        </div>
    );
}