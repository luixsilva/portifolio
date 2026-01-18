"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-8/12">
        <h1 className="text-4xl text-foreground font-bold">
          Olá! Eu sou o Luiz.
        </h1>
        <p className="text-base">
          Sou desenvolvedor de software com mais de 2 anos de experiência,
          atuando no desenvolvimento de aplicações web e mobile. Trabalho
          principalmente com JavaScript/TypeScript, utilizando React, React
          Native, Expo, Next.js, Node.js e NestJS, sempre focando em código
          limpo, boas práticas e experiência do usuário.
        </p>
      </div>
      <Image
        src="/images/foto-terno.png"
        alt="Luiz"
        width={200}
        height={200}
        className="rounded-full border border-white h-36 w-36 "
      />
    </div>
  );
}
