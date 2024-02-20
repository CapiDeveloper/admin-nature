export default function Home() {
  return (
    <>
      <div className="sm:flex justify-center items-center">
        <img src="./travel-welcome.svg" width={400} alt="Travel" />
        <div className="flex items-center justify-center gap-5 text-2xl font-bold">
          <p className="">Hola, Christian</p>
          <img src="./saludo.png" alt="Saludar" />
        </div>
      </div>
    </>
  );
}
