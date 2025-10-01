import { useState } from "react"
import hospitalImg from '../../../assets/img/hospital.jpg';

export default function Home(){
    return(
        <div className="p-16">
        <h1 className="text-4xl font-bold text-center mb-8">GRUPO CEN</h1>
        <p className="text-center">O Grupo CEN é uma equipe multidisciplinar de estudantes do curso de Tecnologia em Desenvolvimento de Sistemas da FIAP, unindo habilidades em front-end, design de interface e acessibilidade digital. Em parceria com o Hospital das Clínicas, o CEN projetou e implementou toda a estrutura HTML, CSS e JavaScript da solução.</p>
        <img 
        className="mx-auto rounded-3xl mt-4" 
        src={hospitalImg} 
        alt="Foto do hospital" 
        />

        <div className="p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Localização da Unidade Hospital das Clínicas:
          </h2>
          <p className="text-center mb-6">
            Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000
          </p>
        </div>
        </div>


    )

}