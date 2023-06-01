function Paciente ({paciente, setPaciente, eliminarPaciente}){

        const {nombre, prop, email, fecha, des, id} = paciente;

    return(
        <>
            <div className="mr-5 ml-5 mb-5 bg-white rounded-xl shadow-xl px-5 py-8">
                <p className="mb-4 uppercase text-gray-700 font-bold">Nombre de mascota:{" "}
                    <span className="normal-case font-normal">{nombre}</span>
                </p>
                <p className="mb-4 uppercase text-gray-700 font-bold">Nombre del propietario:{" "}
                    <span className="normal-case font-normal">{prop}</span>
                </p>
                <p className="mb-4 uppercase text-gray-700 font-bold">Email:{" "}
                    <span className="normal-case font-normal">{email}</span>
                </p>
                <p className="mb-4 uppercase text-gray-700 font-bold">Fecha de ingreso:{" "}
                    <span className="normal-case font-normal">{fecha}</span>
                </p>
                <p className="mb-4 uppercase text-gray-700 font-bold">Descripcion:{" "}
                    <span className="normal-case font-normal">{des}</span>
                </p>

                <div className="flex justify-between mt-6">

                    <button className="py-2 px-10 bg-indigo-600 rounded-md text-white hover:bg-indigo-800 font-bold uppercase"
                    onClick={() => setPaciente(paciente)}>Editar</button>

                    <button className="py-2 px-10 bg-red-600 rounded-md text-white hover:bg-red-800 font-bold uppercase"
                    onClick={() => eliminarPaciente(id)} >Eliminar</button>

                </div>
            </div>
        </>
    )
}
export default Paciente;