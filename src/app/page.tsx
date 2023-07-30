import Image from "next/image";
import profilePic from "./eulol.png"

export default function Home() {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 xl:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap">
      <div className="flex flex-col items-center justify-center md:m-6 xl:items-start gap-4 w-full xl:w-2/5">
        <p>Sobre mim: </p>
        <p>Desenvolvedor Front-end há 2 anos, com experiência em desenvolvimento de software. Tenho
          conhecimento em desenvolvimento android utilizando Kotlin e web utilizando JavaScript e
          TypeScript. Sou experiente em construir interfaces intuitivas e responsivas, tanto em
          aplicativos Android quanto em aplicações web.</p>
        <p>Principais Conhecimentos: </p>
        <p>JavaScript ⋅ TypeScript ⋅ React ⋅ Kotlin</p>

      </div>
      <div className="flex items-center flex-col">
        <Image
          src={profilePic}
          alt="Foto autor"
          width={200}
          height={200}
          className="rounded-full"
        />
        <p>Gustavo Carvalho da Silva</p>
      </div>
    </main >
  )
}
