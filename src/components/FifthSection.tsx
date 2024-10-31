export const FifthSection = () => {
    return <>
      <section className="h-full w-full flex justify-center items-center">
        <div className="w-fulll h-[80%] w-full flex flex-col justify-around items-center">
          {/*Section de la informacion de la tarjeta */}
          <div className="flex justify-center items-center h-auto w-full bg-[#C77C77]" >
            <h2 className="py-5 font-dm-serif text-white text-center text-4xl xl:text-6xl">
              Regalos
            </h2>
          </div>
          {/* Contenido de las iglesia y evento */}
          <div className="flex flex-col gap-10 relative">
            <div className="flex flex-col gap-2 items-center">
                <img className="h-[150px]"  src="/decorations/14.svg" alt="Imagen de un regalo" />
                <h2 className="w-[70%] text-center font-poppins  text-primary text-xl ">Para mi tu presencia es el mejor regalo, pero si deseas obsequiarme algo,
                    te sugiero la siguiente opción:
                </h2>
                <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51507201">
                    <img className="h-[50px] rounded-xl"  src="/decorations/button-liverpool.png" alt="" />
                </a>
                <p className="text-primary text-xl font-poppins">ó</p>
                <span className="text-primary text-xl font-poppins p-0 m-0">NO. de Evento <strong>51507201</strong></span>
            </div>
          </div>
        </div>
  
      </section>
    </>
  
  }
  