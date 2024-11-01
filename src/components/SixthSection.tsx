import { WsLink } from "./WsLink";



export const SixthSection = () => {
 

    return (
        <>
            <section className="h-full w-full flex justify-center items-center">
                <div className=" w-full h-[80%] flex flex-col gap-20 justify-around items-center">
                    {/*Section de la informacion de la tarjeta */}
                    <div className="flex justify-center items-center h-auto w-full bg-[#C77C77]" >
                        <h2 className="  py-5 font-dm-serif text-white text-center text-4xl xl:text-6xl">
                            ¡Esperamos contar con tu asistencia!
                        </h2>
                    </div>
                    {/* Contenido de las iglesia y evento */}
                    <div className=" w-full h-full xl:w-1/2 xl:h-1/2   flex flex-col items-center gap-10 relative">
                        <h3 className=" font-poppins text-primary text-center text-3xl xl:text-4xl ">Confirma vía</h3>
                        <h2 className=" font-poppins text-primary text-center font-semibold text-4xl xl:text-5xl ">Whatsapp</h2>
                      < WsLink/>
                    </div>
                </div>
            </section>
        </>
    )
}


