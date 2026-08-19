"use client"

import Clock from "@/app/components/clock"
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {

const pt: string = "Olá, me chamo Nelson!"
const year: number = new Date().getFullYear()

return (
<div>

    <div className="w-full border-0 border-white">
        <div className="flex ml-auto justify-end w-fit border p-5 rounded-2xl">
          <Clock classes="text-red-500"/>
        </div>
    </div>

    <div className="flex flex-col justify-between items-left gap-5 p-12 border border-white m-5 rounded-[10px]">

        <Typewriter onInit={(typewriter)=> {
            typewriter.typeString(`<span class="text-2xl">${pt}</span>`)
            .start();
            }}
            />

{/* animate-in fade-in slide-in-from-left ease-out duration-3000 */}
    <p className="">
        Sou Estudante de Engenharia de Software na FUCAPI com formação técnica em Informática. Busco oportunidade em cargo iniciante ou estágio a fim de aplicar conhecimentos e adquirir experiência profissional.
    </p>

            <div>
                <div className="flex flex-row gap-5">
                <a href="https://www.linkedin.com/in/nelson-lucas-539765325">
                <FaLinkedin size={30} />
                </a>
                <a href="https://www.github.com/5tack-s">
                <FaGithub size={30}/>
                </a>
            </div>

    </div>  
    </div>
    
    <div className="justify-center flex">
        <footer>Nelson Lucas de Souza Martins &copy; {year}</footer>
    </div>
</div>
);
}