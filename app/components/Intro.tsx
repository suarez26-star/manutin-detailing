"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [mostrar, setMostrar] = useState(true);
  const [desapareciendo, setDesapareciendo] = useState(false);

  useEffect(() => {
    const inicioSalida = setTimeout(() => {
      setDesapareciendo(true);
    }, 4500);

    const ocultar = setTimeout(() => {
      setMostrar(false);
    }, 5200);

    return () => {
      clearTimeout(inicioSalida);
      clearTimeout(ocultar);
    };
  }, []);

  if (!mostrar) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black transition-opacity duration-700 ${
        desapareciendo ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/intro-manutin.png"
        alt="Manutin Detailing Studio"
        className="intro-image h-full w-full object-cover"
      />

      <div className="spotlight spotlight-one" />
      <div className="spotlight spotlight-two" />

      <style jsx>{`
      .intro-image {
  opacity: 0;
  transform: scale(1.06);
  animation: entradaImagen 1.4s ease-out forwards;
}

@keyframes entradaImagen {
  0% {
    opacity: 0;
    transform: scale(1.06);
    filter: brightness(0.15);
  }

  100% {
    opacity: 1;
    transform: scale(1);
    filter: brightness(1);
  }
}
        .spotlight {
          position: absolute;
          top: -30%;
          width: 22%;
          height: 170%;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 170, 70, 0.05),
            rgba(255, 185, 90, 0.32),
            rgba(255, 220, 170, 0.12),
            transparent
          );
          filter: blur(18px);
          mix-blend-mode: screen;
        }

        .spotlight-one {
          left: -35%;
          transform: rotate(18deg);
          animation: focoUno 4s ease-in-out forwards;
        }

        .spotlight-two {
          left: 115%;
          transform: rotate(-18deg);
          animation: focoDos 4.2s ease-in-out forwards;
        }

        @keyframes focoUno {
          0% {
            left: -35%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 0.9;
          }

          100% {
            left: 115%;
            opacity: 0;
          }
        }

        @keyframes focoDos {
          0% {
            left: 115%;
            opacity: 0;
          }

          25% {
            opacity: 0.9;
          }

          85% {
            opacity: 0.8;
          }

          100% {
            left: -35%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}