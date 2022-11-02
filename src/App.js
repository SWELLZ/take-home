
function App() {
  return (
    <>
    <div className="flex justify-between h-[70px] w-full bg-red-800 text-white items-center absolute top-0">
      <a className="ml-8 font-bold text-2xl" href="">COMPANY</a>
      <nav className="w-[30%] flex justify-evenly mr-8">
        <a className="underline hover:no-underline" href="">Home</a>
        <a className="underline hover:no-underline" href="">About</a>
        <a className="underline hover:no-underline" href="">Support</a>
      </nav>
    </div>
    <section className="bg-[url('components/resources/landing-sect.jpg')] h-screen pt-[70px] text-white bg-no-repeat bg-center bg-cover">
      <div className="w-full h-full grid place-items-center bg-black/30">
        <h1 className="text-5xl bg-gradient-to-tr from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent font-bold">This company does... Stuff?</h1>
      </div>
    </section>
    </>
  );
}

export default App;
