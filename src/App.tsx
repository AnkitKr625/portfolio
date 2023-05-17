import Hero from './assets/hero.svg';
import './App.css';

function App() {

  return (
    <>
      <header className='p-4 h-24 bg-[#4F46E5] rounded-b-2xl text-white font-bold text-xl flex items-center justify-between'>
        <div className='rotation-container'>
          <span className='rotation-item'>{`<D/>`}</span>
        </div>
        <nav className='navigation flex gap-4'>
          <span className='cursor-pointer'>Home</span>
          <span className='cursor-pointer'>Projects</span>
        </nav>
      </header>
      <main className='p-16 flex flex-col items-center'>
        <section className='w-full flex flex-col items-center gap-4 py-8'>
          <img src={Hero} alt="hero" width={400}/>
          <h1 className='font-semibold text-3xl text-[#4F46E5]'>Hey, I'm Ankit Kumar</h1>
          <p className='w-full md:w-1/2 md:pl-4 text-xl'>A creative and dedicated <b>Frontend Developer</b> with a passion for crafting exceptional user experiences. I specialize in<b> HTML, CSS, and JavaScript</b>, and I am proficient in popular frameworks like <b>React and Vue</b>.</p>
        </section>
        <section className='tech-stack bg-[#F3F4F6] w-full flex flex-col items-center py-8'>
          <div>
            <h1 className='font-semibold text-3xl'>Technologies I have worked with:</h1>
            <ul className='tech-stack-list list-disc pl-6 text-xl'>
              <li>JavasScript</li>
              <li>React JS</li>
              <li>Vue JS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </section>
        <section className='pitch py-8 w-full flex flex-col items-center gap-4'>
            <h1 className='font-semibold text-3xl'>Looking to Collaborate? Let's Talk</h1>
            <p className='w-full md:w-1/2 md:pl-4 text-xl'>I enjoy working on UI, and I can create a beautiful UI for you. I'm eager to work on the frontend component of it in partnership with a business or individual. Additionally, I'm interested in freelancing. Let's discuss more!</p>
            {/* <a href='mailto:ankitkr1009@gmail.com'>ankitkr1009@gmail.com</a> */}
        </section>
      </main>
      <footer className='p-4 h-24 bg-[#4F46E5] rounded-t-2xl text-white font-bold text-xl flex items-center justify-center'></footer>
    </>
  )
}

export default App
