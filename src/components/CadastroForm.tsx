import React from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";

import InputMask from "react-input-mask";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"   
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório").min(3),
    email: yup.string().required("O nome é obrigatório").email("Digite um email valido"),
    telefone: yup.string().required("O Celular é obrigatório").min(11),
    cpf: yup.string().required("O CPF é obrigatório").min(11),
    cep: yup.string().required("O CEP é obrigatório").min(8),
})


const onSubmit = (data:any) => {
    console.log("Dados enviados: ", data)
    alert("Dados enviados com sucesso")
}

export default function InformacoesPessoaisForm (){
    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data:any) => {
        console.log("Dados enviados: ", data)
        alert("Dados enviados com sucesso")
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="bg-blue-900 text-white"><FaBeer/> SE CADASTRE-SE <FaBeer/></h2>
            <hr />
            <p>Para ganhar uma cerveja gratis</p>
            <hr />
            <label htmlFor=""><AiOutlineUser/> Digite seu nome</label>
            <input {...register("nome")} />
            <p>{errors.nome?.message}</p>
            <br></br>
            <label htmlFor=""><AiOutlineMail/> Digite seu email</label>
            <input {...register("email")} />
            <p>{errors.email?.message}</p>
            <br></br>
            <label htmlFor=""><AiTwotonePhone/> Digite seu Celular</label>
            <InputMask {...register("telefone")} mask={"(99) 99999-9999"} />
            <p>{errors.telefone?.message}</p>
            <br></br>
            <label htmlFor=""><AiOutlineIdcard/> Digite seu CPF</label>
            <InputMask {...register("cpf")} mask={"999.999.999-99"} />
            <p>{errors.cpf?.message}</p>
            <br></br>
            <button>Enviar</button>



        </form>
    )
}
