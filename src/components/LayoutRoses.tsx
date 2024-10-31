

export const LayoutRoses = ({children}) => {
  return (
    <div className="w-full h-full relative  overflow-hidden my-10 " >
        <Contentimage image='/decorations/19.svg' styles='absolute -top-12 left-0  h-[200px]  xl:h-[300px]'/>
        <Contentimage image='/decorations/19.svg' styles='absolute -bottom-12 left-0  h-[200px]  xl:h-[300px] rotate-45'/>
        <Contentimage image='/decorations/1.svg' styles='absolute -top-12 right-0  h-[200px]  xl:h-[300px]'/>
        <Contentimage image='/decorations/1.svg' styles='absolute -bottom-12 right-0  h-[200px]  xl:h-[300px]  -rotate-45 '/>
        {children}
    </div>
  )
}


const Contentimage = ({image, styles}) =>{
    return <>
    <div className={styles}>
        <img className="h-full w-full"  src={image} alt="Imagen de la decoracion" />
    </div>
    </>
}