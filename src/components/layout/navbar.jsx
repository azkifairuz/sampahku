import { RiHomeLine } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {CiLocationOn}  from "react-icons/ci";
export default function Navbar() {
     return(
        <div className="py-6 px-[26px] max-w-sm w-full text-white justify-around items-center fixed bottom-0 bg-blueMain flex gap-[58px]">
            <RiHomeLine className="cursor-pointer" size={50}/>
            <BsTruck className="cursor-pointer" size={50}/>
            <CiLocationOn className="cursor-pointer" size={50}/>
            <CgProfile className="cursor-pointer" size={50}/>
        </div>
     );
}