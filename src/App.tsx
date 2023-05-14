import Hero from './assets/hero.svg';
import './App.css';

function App() {

  return (
    <>
      <header className='p-4 h-24 bg-[#4F46E5] rounded-b-2xl text-white font-bold text-xl flex justify-between'>
        <div className='name'>Ankit Kumar</div>
        <nav className='navigation flex gap-4 mt-6'>
          <ul>Home</ul>
          <ul>Projects</ul>
        </nav>
      </header>
      <main className='p-16 flex flex-col gap-6 items-center'>
        <section className='text-center'>
          <img src={Hero} alt="hero" width={400}/>
          <h1 className='font-semibold text-3xl'>Ankit Kumar <span className='text-[#4F46E5]'>a Software Developer</span></h1>
        </section>
        <section className='tech-stack bg-[#F3F4F6]'>
          <h1 className='font-semibold text-3xl'>Technologies</h1>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
