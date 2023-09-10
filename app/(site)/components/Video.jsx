import React from "react";

const Video = ({ videoId }) => {
  // Crea una URL para el video de YouTube con parámetros para evitar sugerencias al final
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1`;

  return (
    <div className=" flex w-[80%] lg:w-full justify-center mt-12">
      {/* 1. El iframe muestra el video de YouTube */}
      <iframe
        src={videoUrl}
        allowFullScreen
        className="w-[640px] h-[390px] rounded-md border-2 border-solid border-dark bg-light p-4"
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Video;
