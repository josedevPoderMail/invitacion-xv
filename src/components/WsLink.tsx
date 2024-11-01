import  { useEffect } from 'react';

export const WsLink = () => {
  const phoneNumber = "529631309801";
  const message = "¡Buen día, Confirmo mi asistencia a los XV años!";
  const encodedMessage = encodeURIComponent(message);
  const webLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  const appLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

  useEffect(() => {
    console.log('ashoih')
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappLink = document.getElementById("whatsappLink");
    if (isMobile && whatsappLink) {
      whatsappLink.setAttribute("href", appLink);
    }
  }, []);

  return ( <a target="_blank" id="whatsappLink" rel="noopener noreferrer" className="w-full     flex items-center justify-center"
href={webLink}>
<img className="w-[40%]" src="/decorations/17.svg" alt="Imagen del boton para whatsapp" />
</a>
  );
};

 