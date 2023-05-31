import { useNavigate } from "react-router-dom";
import Logo from "../asset/Logo.png";
export default function Singup() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#D3F0E2] pt-[17px] flex h-screen flex-col gap-[14px] justify-start px-[46px]">
      <div className="max-w-[130px]">
        <img src={Logo} alt="Logo" className="w-full bg-center bg-cover" />
      </div>
      <div>
        <div className=" border border-b border-b-black text-center w-[88px] text-[16px] leading-[32px]">
          Daftar
        </div>
        <div className="text-[12px]">Silahkan isi data dibawah ini</div>
      </div>
      <div className="w-full mx-auto flex flex-col gap-[20px] justify-center px-10 bg-blueMain p-5 rounded-lg">
        <form action="" className="flex justify-center flex-col gap-[10px]">
          <div className="flex flex-col gap-[11px]">
            <label htmlFor="username" className="text-white text-[13px]">
              Username
            </label>
            <input
              className="rounded-[12px] w-[249px] outline-none text-[13px] bg-white h-[35px] p-1"
              type="text"
              id="username"
              name="username"
              placeholder="Masukan Nama Anda"
            />
          </div>
          <div className="flex flex-col gap-[11px]">
            <label htmlFor="email" className="text-white text-[13px]">
              Email
            </label>
            <input
              className="rounded-[12px] outline-none text-[13px] bg-white h-[35px] p-2"
              type="text"
              id="email"
              name="email"
              placeholder="Masukan Email Atau Username"
            />
          </div>
          <div className="flex flex-col gap-[11px]">
            <label htmlFor="pw" className="text-white  text-[13px] ">
              Password
            </label>
            <input
              className="rounded-[12px] outline-none text-[13px] bg-white h-[35px] p-2"
              type="password"
              id="pw"
              name="pw"
              placeholder="Masukan Password"
            />
            <p className="self-end text-white text-[13px]">Lupa Password?</p>
          </div>
        </form>
        <div className="flex flex-col  gap-[20px] text-center">
          <p className="text-white text-[13px]">Atau</p>
          <h1 className="text-white text-[12px]">
            Belum Memiliki Akun?{" "}
            <span
              onClick={() => {
                navigate("singup");
              }}
              className="text-[#49C185] cursor-pointer"
            >
              Daftar
            </span>
          </h1>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="rounded-full w-fit p-3 bg-blueMain self-end text-white "
      >
        Selanjutnya
      </button>
    </div>
  );
}
