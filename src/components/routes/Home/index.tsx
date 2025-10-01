import { useState } from "react"
import hospitalImg from "../../../assets/img/hospital.jpg";

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
        <div className="flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29256.27293598153!2d-46.686987154553485!3d-23.567218133447447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b00d3aa487%3A0xfe715b43e354f823!2sHospital%20das%20Cl%C3%ADnicas%20FMUSP!5e0!3m2!1spt-BR!2sbr!4v1747503765351!5m2!1spt-BR!2sbr"
          className="w-full max-w-4xl h-[450px] rounded-4xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa - Hospital das Clínicas"/>
          </div>
      </div>


    )

}