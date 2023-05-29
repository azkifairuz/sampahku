import { useNavigate } from 'react-router-dom'
import Logo from '../asset/Logo.png'
export default function OnBoarding() {
    const navigate = useNavigate()
    return (
        <div className="flex border  flex-col w-full gap-[138px] md:mx-auto md:max-w-sm bg-[#D3F0E2] justify-center h-screen items-center">
            <img src={Logo} alt="logo" className='w-[266.36px]' />
            <button
                onClick={() => navigate("/")}
                className='rounded-lg bg-blueMain w-[266.36px] text-white py-2 px-9'>Let’s Started
            </button>
        </div>
    )
}