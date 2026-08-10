"use client";

import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const [mostrar, setMostrar] = useState(true);
  const [desapareciendo, setDesapareciendo] = useState(false);
  const [iniciada, setIniciada] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
  const introVista = sessionStorage.getItem("manutinIntroVista");

  if (introVista === "si") {
    setMostrar(false);
  }
}, []);

  const iniciarExperiencia = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.8;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    sessionStorage.setItem("manutinIntroVista", "si");
    setIniciada(true);
  };

  const saltarIntro = () => {
  const audio = audioRef.current;

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  setDesapareciendo(true);

  setTimeout(() => {
    setMostrar(false);
  }, 700);
 };
  useEffect(() => {
    if (!iniciada) return;

    const audio = audioRef.current;

    const cortarAudio = setTimeout(() => {
      if (audio) {
        audio.pause();
      }
    }, 3800);

    const inicioSalida = setTimeout(() => {
      setDesapareciendo(true);
    }, 4500);

    const ocultar = setTimeout(() => {
      setMostrar(false);
    }, 5200);

    return () => {
      clearTimeout(cortarAudio);
      clearTimeout(inicioSalida);
      clearTimeout(ocultar);

      if (audio) {
        audio.pause();
      }
    };
  }, [iniciada]);

  if (!mostrar) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black transition-opacity duration-700 ${
        desapareciendo ? "opacity-0" : "opacity-100"
      }`}
    >
      <audio
        ref={audioRef}
        src="/engine-start.mp3"
        preload="auto"
      />

      {!iniciada && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <button
            onClick={iniciarExperiencia}
            className="border border-amber-500 px-10 py-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500 transition duration-300 hover:bg-amber-500 hover:text-black"
          >
            Iniciar experiencia
          </button>
        </div>
      )}

      <button
        onClick={saltarIntro}
        className="absolute bottom-8 right-8 z-[60] text-xs uppercase tracking-[0.25em] text-zinc-400 transition hover:text-amber-500"
      >
        Saltar intro
      </button>
      {iniciada && (
        <>
          <img
            src="/intro-manutin.png"
            alt="Manutin Detailing Studio"
            className="intro-image h-full w-full object-cover"
          />

          <div className="headlight headlight-left" />
          <div className="headlight headlight-right" />

          <div className="spotlight spotlight-one" />
          <div className="spotlight spotlight-two" />
        </>
      )}

      <style jsx>{`
        .intro-image {
          opacity: 0;
          transform: scale(1.08) translateX(-1%);
          animation: entradaImagen 4.5s ease-out forwards;
        }

        @keyframes entradaImagen {
          0% {
            opacity: 0;
            transform: scale(1.08) translateX(-1%);
            filter: brightness(0.15);
          }

          25% {
            opacity: 1;
            transform: scale(1.05) translateX(-0.5%);
            filter: brightness(1);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateX(0.5%);
            filter: brightness(1);
          }
        }

        .headlight {
          position: absolute;
          z-index: 20;
          width: 180px;
          height: 90px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 245, 220, 0.95) 12%,
            rgba(255, 185, 90, 0.55) 32%,
            rgba(255, 150, 50, 0.18) 55%,
            transparent 75%
          );
          filter: blur(6px);
          mix-blend-mode: screen;
          animation: encenderFaro 1.5s ease-out forwards;
        }

        .headlight-left {
          left: 58%;
          top: 56%;
          width: 130px;
          height: 60px;
        }

        .headlight-right {
          left: 84%;
          top: 58%;
          width: 75px;
          height: 40px;
          animation-delay: 0.08s;
        }

        @keyframes encenderFaro {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }

          35% {
            opacity: 0;
            transform: scale(0.4);
          }

          48% {
            opacity: 1;
            transform: scale(1.7);
          }

          58% {
            opacity: 0.35;
            transform: scale(0.9);
          }

          70% {
            opacity: 0.95;
            transform: scale(1.15);
          }

          100% {
            opacity: 0.55;
            transform: scale(1);
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