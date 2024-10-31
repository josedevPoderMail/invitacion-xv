

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
                        <h3 className=" font-poppins text-primary text-center text-3xl xl:text-4xl ">Confirma via</h3>
                        <h2 className=" font-poppins text-primary text-center font-semibold text-4xl xl:text-5xl ">Whatsapp</h2>
                        <a className="w-full     flex items-center justify-center" href="https://wa.me/5939631309801?text=¡Buen%20día,%20Confirmo%20mi%20asistencia%20a%20los%20XV%20años!">
                            <img className="w-[40%]" src="/decorations/17.svg" alt="Imagen del boton para whatsapp" />
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}

{/*
<div className="w-full  m-auto flex flex-col justify-center items-center gap-5" >
<h3 className=" font-poppins text-primary text-center text-3xl xl:text-6xl ">Confirma via</h3>
<h2 className=" font-poppins text-primary text-center font-semibold text-4xl xl:text-6xl ">Whatsapp</h2>
<div>
<a className="w-full     flex items-center justify-center" href="https://wa.me/5939631309801?text=¡Buen%20día,%20Confirmo%20mi%20asistencia%20a%20los%20XV%20años!">
    <img className="w-1/2  xl:w-[500px]" src="/decorations/17.svg" alt="Imagen del boton para whatsapp" />
</a>
</div>
</div>*/}