export const SecondSection = () => {
    return <>
        <section className="h-full w-full flex justify-center items-center">
            <div className="w-full h-[90%] w-full flex flex-col justify-around items-center">
                {/*Section de la informacion de la tarjeta */}
                <div className="flex justify-center items-center h-auto w-full bg-[#C77C77]" >
                    <h2 className="py-5 font-dm-serif text-white text-center text-4xl xl:text-6xl">
                    Itinerario
                    </h2>
                </div>
                {/* Contenido de las iglesia y evento */}
                <div className="flex flex-col gap-5 relative">
                    <ChurchAndTime />
                    <EventAndTime/>
                </div>
            </div>

        </section>
    </>
}


const ChurchAndTime = () => {

    return <>
        <div className="flex flex-col gap-5 items-center">
            <div className='flex flex-col gap-2 items-center' >  
                <img className="w-[100px] "  src="/decorations/12.svg" alt="Imagen de la iglesia" />
                <h4 className="font-oregano text-primary text-2xl">Misa</h4>
            </div>
        </div>
        <h2 className="text-4xl font-oregano text-primary text-center">7:00 PM</h2>
    </>
}


const EventAndTime = () => {

    return <>
        <div className="flex flex-col gap-5 items-center">
            <div className=' flex flex-col gap-2 items-center' >  
                <img className="h-[100px]"  src="/decorations/13.svg" alt="Imagen de la iglesia" />
                <h4 className="font-oregano text-primary text-2xl">Evento</h4>
            </div>
        </div>
        <h2 className="text-4xl font-oregano text-primary text-center" >8:00 PM</h2>
    </>
}