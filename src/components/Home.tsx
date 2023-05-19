import Hero from '../assets/hero.svg';

function Home() {
  return (
    <>
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
        <section className='projects py-8 w-full flex flex-col items-center gap-4'>
          <h1 className='font-semibold text-3xl'>Projects</h1>
          <p className='w-full md:w-1/2 md:pl-4 text-xl'>I like to showcase my work and thus, you can see my projects hosted online.</p>
          <button className='project bg-[#4F46E5] px-4 py-2 rounded-lg text-white text-xl font-semibold'>Browse Projects</button>
        </section>
        <section className='pitch bg-[#F3F4F6] py-8 w-full flex flex-col items-center gap-4'>
            <h1 className='font-semibold text-3xl'>Looking to Collaborate? Let's Talk</h1>
            <p className='w-full md:w-1/2 md:pl-4 text-xl'>I enjoy working on UI, and I can create a beautiful UI for you. I'm eager to work on the frontend component of it in partnership with a business or individual. Additionally, I'm interested in freelancing. Let's discuss more!</p>
            <a className='cursor-pointer' href='mailto:ankitkr1009@gmail.com'>ankitkr1009@gmail.com</a>
        </section>
    </>
  )
}

export default Home;