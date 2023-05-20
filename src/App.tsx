import Home from './components/Home.tsx';
import GitHubLogo from './assets/github.svg';
import LinkedInLogo from './assets/linkedIn.svg';
import MailLogo from './assets/mail.svg';
import TwitterLogo from './assets/twiiter.svg';
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
        <Home/>
      </main>
      <footer className='p-4 h-24 bg-[#4F46E5] rounded-t-2xl text-white font-bold text-xl flex items-center justify-center gap-8'>
        <img
          src={GitHubLogo}
          alt="git-hub"
          className='cursor-pointer'
          width={40}
          onClick={() => {window.open('https://github.com/AnkitKr625', '_blank')}}
        />
        <img
          src={LinkedInLogo}
          alt="linkedIn"
          className='cursor-pointer'
          width={40}
          onClick={() => {window.open('https://www.linkedin.com/in/ankitkr625/', '_blank')}}
        />
        <a className='cursor-pointer' href='mailto:ankitkr1009@gmail.com' target='_blank'>
          <img
            src={MailLogo}
            alt="mail"
            width={40}
          />
        </a>
        <img
          src={TwitterLogo}
          alt="twitter"
          className='cursor-pointer'
          width={40}
          onClick={() => {window.open('https://twitter.com/AnkitKr625', '_blank')}}
        />
      </footer>
    </>
  )
}

export default App
