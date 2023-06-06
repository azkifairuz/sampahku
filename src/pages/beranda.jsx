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
                            <p>{saldo}</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-sm">Poin</h1>
                            <p>{poin}</p>
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
                
            </div>
        </>
    )
}