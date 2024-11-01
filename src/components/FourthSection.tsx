export const FourhSection = () => {
    return <>
      <section className="h-full w-full flex justify-center items-center">
        <div className="w-fulll h-[80%] w-full flex flex-col justify-around items-center">
          {/*Section de la informacion de la tarjeta */}
          <div className="flex justify-center items-center h-auto w-full bg-[#C77C77]" >
            <h2 className="py-5 font-dm-serif text-white text-center text-4xl xl:text-6xl">
              Evento
            </h2>
          </div>
          {/* Contenido de las iglesia y evento */}
          <div className="flex flex-col gap-10 relative">
            <LivingRommAndImage/>
  
            {/*Boton y nombre de la ciudad */}
            <div className="w-full flex flex-col gap-2 justify-center items-center">
              <a href="https://maps.app.goo.gl/GtkcgfGmMM5Wbk497"  className="hover:cursor-pointer rounded-xl bg-primary text-white font-dm-serif text=xl px-4 py-2">Abrir mapa</a>
              <h2 className="font-dm-serif text-primary text-center text-2xl" >Comitán de Domínguez</h2>
            </div>
          </div>
        </div>
  
      </section>
    </>
  
  }
  
  
  
  const LivingRommAndImage = () => {
    return <>
      <div className="flex flex-col gap-2 items-center" >
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <h2 className="font-dm-serif text-3xl text-center text-primary font-semibold">Templo de la Asunción de María</h2>
          <h4 className=" w-[80%] font-poppins text-primary text-center text-xl"
          >30099, Panteleón Domínguez 11, Miguel  Alemán, Comitán de Domínguez, Chis</h4>
        </div>
        <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
    <img 
        className="w-full rounded-xl" 
        src="/decorations/Templo.jpeg" 
        alt="Imagen del salón donde ocurrirá el evento" 
    />
</div>
      </div>
    </>
  }