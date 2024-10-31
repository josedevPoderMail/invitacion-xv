
export const GallerySection = ({ image }) => {
  return (
    <section className="relative w-full h-full ">
      <img
        className=" absolute top-0 bottom-0 left-0 right-0  w-full h-full"
        src={image}
        alt="Imagen de la pareja"
      />
      <div className=" absolute top-0 bottom-0 left-0 right-0  w-full h-full backdrop-blur-xl z-10"></div>
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-full  xl:w-[35%] xl:h-[90%] h-auto  z-40 `}
      >
        <ImageBg image={image} positionedText={true} />
      </div>
    </section>
  )
}



const ImageBg = ({ image, positionedText }) => {
  return (
    <>
      <div
        className={`absolute top-2 bottom-2 left-2 right-2 border-2 
           border-white flex  rounded-xl overflow-hidden  ${positionedText ? "justify-start items-end" : "justify-end"
          }  `}
      >

        <div className=" w-full h-full relative">
          <h2 className="absolute left-0 bottom-0 p-10 font-pinyon text-3xl xl:text-5xl font-bold
          font-oregano  text-white">
            Fernanda Briones
          </h2>
          <img
            className=" rounded-xl w-full h-full object-contain  xl:object-cover "
            src={image}
            alt=""
          />
        </div>
      </div>


    </>
  );
};
