import plastic from "../asset/guidance_plastic.svg"
export default function Home(props) {
    const {name = "es",saldo = "20.000",poin = "100"} = props
    return (
        <>
            <div className="w-full h-full ">
                {/* heaader section */}
                <section className="p-11 text-white bg-blueMain">
                    <h1 className="text-lg font-bold font-poppins text-white pb-5">Selamat pagi,{name}</h1>
                    <div className="flex gap-16  text-center w-full">
                        <div >
                            <h1 className="font-bold text-sm">Saldo</h1>
                            <p>Rp.{saldo}</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-sm">Poin</h1>
                            <p>{poin} Poin</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-sm">Transaksi</h1>
                        </div>
                    </div>
                </section>
                {/* end heaader section */}
                {/* category section */}
                <section className="w-full px-7 py-5 bg-white grid grid-cols-4 gap-10 justify-around">
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                    <div className="rounded-full p-2 bg-molecular-orange w-16 h-16">
                    </div>
                </section>
                {/* end category section */}
                {/* pojok literasi section */}
                <section className="w-full flex flex-col px-2 gap-4">
                    <h1 className="text-sm font-poppins px-5 font-bold text-blueMain">Pojok Literasi</h1>
                    <div className="w-full grid grid-flow-col gap-2 overflow-x-scroll">
                            <div className="w-[198px] h-[112px] bg-slate-400 rounded-xl">

                            </div>
                            <div className="w-[198px] h-[112px] bg-slate-400 rounded-xl">

                            </div>
                            <div className="w-[198px] h-[112px] bg-slate-400 rounded-xl">

                            </div>
                            <div className="w-[198px] h-[112px] bg-slate-400 rounded-xl">

                            </div>
                    </div>
                </section>
                
            </div>
        </>
    )
}