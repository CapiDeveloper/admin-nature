export const Formulario = () => {
  return (
    <form className="max-w-sm mx-auto bg-white rounded-lg p-5">
        <legend className="text-3xl font-bold">Iniciar Sesión</legend>
        <div className="my-5">
            <label for="email" className="block mb-2 text-base font-medium text-gray-900">Tu email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="correo@correo.com" required />
        </div>
        <div className="mb-5">
            <label for="password" className="block mb-2 text-base font-medium text-gray-900">Tu contraseña</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Iniciar Sesión</button>
    </form>
  )
}