import { useState } from 'react';
import Hero from './assets/hero.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='p-4 h-24 bg-[#4F46E5] rounded-b-2xl text-white font-bold text-xl flex justify-between'>
        <div className='name'>Ankit Kumar</div>
        <nav className='navigation flex gap-4 mt-6'>
          <ul>Home</ul>
          <ul>Projects</ul>
        </nav>
      </header>
      <main className='p-16 flex flex-col items-center'>
        <section className='text-center'>
          <img src={Hero} alt="hero" width={400}/>
          <p className='font-semibold text-3xl'>Ankit Kumar <span className='text-[#4F46E5]'>a Software Developer</span></p>
        </section>
      </main>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
