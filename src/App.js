
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
    <section className="px-[70px] py-[30px]">
      <h1 className="text-5xl font-bold text-center">ABOUT</h1>
      <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    </>
  );
}

export default App;
