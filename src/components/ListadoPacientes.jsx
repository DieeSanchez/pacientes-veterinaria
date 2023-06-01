import Paciente from "./Paciente";

function ListadoPacientes ({pacientes, setPaciente, eliminarPaciente}){


    return(
        <div className="md:w-1/2 lg:w-3/5 h-screen">

            {pacientes && pacientes.length ? (
        <>
            <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="mb-4 mt-5 text-center text-lg ">Seguimiento de pacientes{" "}<span className=" text-green-500 font-bold">ACTIVOS</span>:</p>
        <div className="md:h-screen md:overflow-y-scroll">

           
            {pacientes.map((paciente)=>{
                return(
                    <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    />
                )

            })}
        </div>
        </>
            ) :(
                <>
            <h2 className=" font-black text-3xl text-center">No existen pacientes actualmente</h2>
            <p className="mb-4 mt-5 text-center text-lg ">Comienza a <span className="text-indigo-600 font-bold">añadir</span> pacientes</p>
                </>
            )}

        </div>
    )
}

export default ListadoPacientes;