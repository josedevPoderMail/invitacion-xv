

export const ThanksSection = () => {
    return (
        <>
            <div className="h-full w-full relative flex flex-col justify-center items-center" >
                <ItemTop noImage='u1' style='absolute top-0 left-0 h-48 w-48' />
                <ItemTop noImage='u2' style='absolute top-0 right-0 h-48 w-48' />
                <ItemTop noImage='u3' style='absolute bottom-0 left-0 h-48 w-48 ' />
                <ItemTop noImage='u4' style='absolute bottom-0 right-0 h-48 w-48' />
                <div className="  h-full w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 flex flex-col justify-center items-center overflow-hidden">
                    <img
                        className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[70%] max-w-full h-auto"
                        src="/decorations/xv.svg"
                        alt="Decoración"
                    />
                    <h1 className="font-dm-serif text-primary text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center">
                        Te esperamos
                    </h1>
                </div>


            </div>

        </>
    )
}

const ItemTop = ({ style, noImage }) => {
    return <>
        <div className={style}>
            <img className="bg-res-200" src={`/decorations/${noImage}.svg`} alt="" />
        </div>
    </>
}
