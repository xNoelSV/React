const Paciente = () => {
    return (
        <div className='mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>Noel</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
                <span className='font-normal normal-case'>10 Diciembre de 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae ipsum architecto debitis! Corporis esse illum mollitia incidunt dicta explicabo sint ab, dolore qui nesciunt nostrum et praesentium eveniet. Illo!</span>
            </p>
        </div>
    )
}

export default Paciente
