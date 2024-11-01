import { CustomCounter } from "./Counter"


export const FirstSection = () => {
    return (
        <section className='h-full w-full  flex justify-center items-center '>
            <div className='h-full w-full xl:w-[70%] bg-custom-gradient relative ' >
                {/*Coolocar un backdrop*/}
                <div className="absolute left-0 right-0 top-0 bottom-0 m-auto backdrop-blur-sm "></div>
                {/*Section de la informacion de la tarjeta */}
                <div className=' h-full w-full xl:w-[60%] absolute left-0 right-0 top-0 bottom-0 m-auto bg-cover bg-center bg-[url("/gif/bg.gif")]
                flex justify-center items-center
                '>
                    {/*Div relativo para que se pueda ver la informacion*/}
                    <div className="relative h-full w-full overflow-hidden flex justify-center items-center">
                        <ItemTop noImage='4' style='absolute top-0 left-0 h-48 w-48' />
                        <ItemTop noImage='1' style='absolute -top-8 -right-10 h-48 w-48' />
                        <ItemTop noImage='6' style='absolute bottom-0 left-0 h-48 w-48 ' />
                        <ItemTop noImage='7' style='absolute bottom-0 right-0 h-48 w-48' />
                        {/*Datos de la tarjeta*/}
                        <div className="h-[90%] w-[90%] flex flex-col justify-around items-center ">
                            <NameAndFLowers />
                            <h2 className="font-dm-serif text-white text-center text-4xl xl:text-6xl"  >Fernanda Briones</h2>
                            <TextInvitation />
                            <div className="relative flex w-full items-center justify-center gap-2 py-10 " >
                                <img className="absolute top-0 left-0 h-20"  src="/decorations/3.svg" alt="" />
                                <img className="absolute top-30 right-0 h-16"  src="/decorations/2.svg" alt="" />
                                <div className=" w-[80%] flex flex-col gap-5 " >
                                    <div className="flex items-end w-full m-0 p-0" >
                                        <LineWithRombofull />
                                        <img className=" h-8 xl:h-28" src="/decorations/11.svg" alt="imagen de decoracion" />
                                        <LineWithRombofull />
                                    </div>
                                    <div className="w-full flex gap-2 justify-center items-center">
                                        <h2 className="text-white text-4xl xl:text-[70px] font-dm-serif ">Fecha: 16</h2>
                                        <h3 className="font-oregano  text-white text-xl  xl:text-[20px]" >Sábado <br />Noviembre</h3>
                                    </div>
                                    <LineWithRombofull />

                                </div>
                            </div>
                           <div className="w-full relative">
                           <img className="absolute left-0 right-0 m-auto h-12"  src="/decorations/2.svg" alt="" />
                           <h3 className="text-white text-[30px] font-dm-serif text-center my-20 ">Madrina: Nicte Elías</h3>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

const LineWithRombofull = () => {
    return <>
        <div className="flex w-full justify-center items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.79688 8L7.79688 2L13.7969 8L7.79688 14L1.79688 8Z" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span className={`flex-grow h-[3px] bg-white`}></span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.79688 8L7.79688 2L13.7969 8L7.79688 14L1.79688 8Z" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


        </div>
    </>
}


const ItemTop = ({ style, noImage }) => {
    return <>
        <div className={style}>
            <img src={`/decorations/${noImage}.svg`} alt="" />
        </div>
    </>
}

const NameAndFLowers = () => {
    return <>
        <div className="relative w-full   flex justify-center items-center " >
            <div className=" w-full flex flex-col justify-center items-center">
                <img className=" h-40 xl:h-72" src="/decorations/8.svg" alt="Imagen de xv años" />
            </div>
        </div>
    </>
}


const TextInvitation = () => {
    return <>
        <div className="w-full flex justify-center items-center">
            <LineWithRombo orderOne='2' orderTwo='1' />
            <h2 className="font-oregano text-white text-xl xl:text-3xl mx-10 whitespace-nowrap">
                Estas formalmente invitado
            </h2>
            <LineWithRombo orderOne='1' orderTwo='2' />
        </div>

    </>
}



const LineWithRombo = ({ orderOne, orderTwo }) => {
    return <>
        <div className="flex items-center w-full">
            <svg className={`order-${orderOne}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.9999 8L8 2L2 8L8 14L13.9999 8Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className={` order-${orderTwo} flex-grow h-[3px] bg-white`}></span>
        </div>
    </>
}



