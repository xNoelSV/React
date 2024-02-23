import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='md:w-1/2 lg:3/5'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

          <p className='text-xl mt-5 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>

          <div className='md:h-screen mt-10 overflow-auto'>
            {pacientes.map(paciente => {
              return (
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
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>

          <p className='text-xl mt-5 text-center'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y parecerán en este lugar</span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListadoPacientes
