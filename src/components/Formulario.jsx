import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario ({pacientes, setPacientes, paciente, setPaciente}){
    const [nombre, setNombre]= useState("");
    const [prop, setProp]= useState("");
    const [email, setEmail]= useState("");
    const [fecha, setFecha]= useState("");
    const [des, setDes]= useState("");

    //state de validacion
    const [error, setError]=useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setProp(paciente.prop);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setDes(paciente.des);
        }
    }, [paciente])

    const generarId = ()=>{
        const random = Math.random().toString(20).substr(2);
        const random2 = Date.now().toString(20);

        return random+random2;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        //validar form

        if([nombre, prop, email, fecha, des].includes("")){

            setError(true);
        }else{
            setError(false);

            const objetoPaciente={
                nombre, 
                prop, 
                email, 
                fecha, 
                des
            }

            if(paciente.id){
                //editar registro
                objetoPaciente.id = paciente.id;

                const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
                
                setPacientes(pacientesActualizados);
                setPaciente({})

            }else{
                //nuevo registro
                objetoPaciente.id=generarId();
                setPacientes([...pacientes, objetoPaciente]);
            }

            

            //reiniciar form
            setNombre("");
            setProp("");
            setEmail("");
            setFecha("");
            setDes("");
        }

        
    }

    return(
        <div className="sm:mb-4 md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center"> Formulario de pacientes</h2>
        <p className="text-lg mt-5 text-center mb-4">
            Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-6 px-5">
        
        
        {error && <Error/>}

        <div className="mb-2">
            <label htmlFor="inputClick" className="block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Nombre de mascota</label>
            <input type="text" 
            id="inputClick"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            />

        </div>
        <div className="mb-2">
            <label htmlFor="inputClick2" className="mt-4 block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Nombre del propietario</label>
            <input type="text" 
            id="inputClick2"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={prop}
            onChange={(e)=> setProp(e.target.value)}
            />
        </div>
        <div className="mb-2">
            <label htmlFor="inputClick3" className="mt-4 block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Email</label>
            <input type="email" 
            id="inputClick3"
            placeholder="Email@email.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className="mb-2">
            <label htmlFor="inputClick4" className="mt-4 block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Fecha de ingreso</label>
            <input type="date" 
            id="inputClick4"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
            />
        </div>
        <div className="mb-2">
            <label htmlFor="inputClick5" className="mt-4 block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Descripcion</label>
            <textarea
            maxLength="400"
            id="inputClick5"
            className="mb-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion"
            value={des}
            onChange={(e)=> setDes(e.target.value)}
            />
        </div>
            <input type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-colors"
            value={paciente.id ? "Confirmar edicion" : "Agregar Paciente"}  />
        </form>
        </div>

    )
}
export default Formulario;