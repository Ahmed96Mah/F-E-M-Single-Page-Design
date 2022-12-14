import React, { useRef } from 'react';
import logo from './assets/logo.svg';
import graphicImg from './assets/pattern-graphic-design.svg';
import illustrationsImg from './assets/pattern-illustrations.svg';
import motionImg from './assets/pattern-motion-graphics.svg';
import uiUxImg from './assets/pattern-ui-ux.svg';
import photographyImg from './assets/pattern-photography.svg';
import appImg from './assets/pattern-apps.svg';
import imgSlide1 from './assets/image-slide-1.jpg';
import imgSlide2 from './assets/image-slide-2.jpg';
import imgSlide3 from './assets/image-slide-3.jpg';
import imgSlide4 from './assets/image-slide-4.jpg';
import imgSlide5 from './assets/image-slide-5.jpg';
import personImg from './assets/image-amy.webp';
import arrowRight from './assets/icon-arrow-right.svg';
import arrowLeft from './assets/icon-arrow-left.svg';

function App() {
  const imageDisplay = useRef<HTMLDivElement>(null);

  return (
    <div className="App bg-off-white py-4 md:py-9 font-plus-jakarta">
      <header className="App-header mx-4 md:mx-10 xl:mx-40 flex flex-row flex-nowrap justify-between items-center">
        <img src={logo} alt="Company Logo" className="w-12 md:w-16" />
        <a
          href="https://www.google.com"
          className="bg-black hover:bg-soft-purple text-off-white text-sm-mob md:text-sm-dsk py-2 px-7 md:py-4 md:px-12 rounded-full"
        >
          Free Consultation
        </a>
      </header>
      <main className="pt-8 md:pt-16">
        <h1 className="mx-4 md:mx-10 xl:mx-40 text-black text-4xl-mob md:text-5xl-dsk xl:text-6xl-dsk text-center">
          Design solutions made easy
        </h1>
        <p className="text-base-mob md:text-base-dsk text-center mx-11 md:mx-24 xl:mx-89 mt-4 md:mt-7 mb-8 md:mb-16 xl:mb-20 text-grayish-orange">
          With over ten years of experience in various design disciplines, I'm
          your one-stop shop for your design needs.
        </p>
        <div className="grid grid-rows-6 md:grid-rows-3 xl:grid-rows-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 text-2xl-mob text-white mx-4 md:mx-10 xl:mx-40 mb-24 md:mb-28 xl:mb-34">
          <div className="flex flex-col justify-between bg-soft-purple p-6 rounded-lg row-start-1 row-end-3 col-span-full md:col-span-2">
            <div className="flex flex-row justify-end">
              <img src={graphicImg} alt="" className="w-32 mb-24" />
            </div>
            <p className="">Graphic Design</p>
          </div>

          <div className="flex flex-col justify-between bg-soft-orange p-6 rounded-lg row-start-3 row-end-4 col-span-1 md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-4">
            <div className="flex flex-row justify-end">
              <img src={uiUxImg} alt="" className="w-16 mb-9" />
            </div>
            <p>UI/UX</p>
          </div>

          <div className="flex flex-col justify-between bg-soft-rose p-6 rounded-lg row-start-3 row-end-4 col-start-2 md:row-start-1 md:row-end-2 md:col-start-4 xl:col-end-4">
            <div className="flex flex-row justify-end">
              <img src={appImg} alt="" className="w-16 mb-9" />
            </div>
            <p>Apps</p>
          </div>

          <div className="flex flex-col justify-between bg-soft-red p-6 rounded-lg row-start-4 row-end-5 col-span-full md:row-start-2 md:row-end-3 md:col-span-2 xl:col-start-3 xl:col-end-5">
            <div className="flex flex-row justify-end">
              <img src={illustrationsImg} alt="" className="w-32 mb-4" />
            </div>
            <p>Illustrations</p>
          </div>

          <div className="flex flex-col justify-between bg-cyan p-6 rounded-lg row-start-5 row-end-6 col-span-full md:row-start-3 md:row-end-3 md:col-span-2 xl:row-start-1 xl:row-end-2">
            <div className="flex flex-row justify-end">
              <img src={photographyImg} alt="" className="w-40 mb-9" />
            </div>
            <p>Photography</p>
          </div>

          <div className="flex flex-col justify-between bg-dark-mauve p-6 rounded-lg row-start-6 col-span-full md:row-start-3 md:row-end-3 md:col-span-2 xl:row-start-2 xl:row-end-3">
            <div className="flex flex-row justify-end">
              <img src={motionImg} alt="" className="w-32 mb-9" />
            </div>
            <p>Motion Graphics</p>
          </div>
        </div>
        <div className="mx-4 flex flex-col items-center md:flex-row md:justify-between md:items-start xl:items-center xl:xl:mx-40">
          <img
            src={personImg}
            alt=""
            className="w-5/6 mb-11 md:w-3/6 md:-ml-16 md:mr-16 md:mb-0 xl:ml-0 xl:w-2/5 xl:mr-32"
          />
          <div className="flex flex-col items-center md:items-start md:mr-10 xl:justify-center xl:mr-0 xl:mt-auto">
            <p className="text-center text-3xl-mob text-black mb-6 md:text-left md:text-3xl-dsk xl:text-4xl-dsk xl:mb-9">
              I'm Amy, and I'd love to work on your next project
            </p>
            <p className="text-center text-base-mob text-grayish-orange mb-6 md:text-base-dsk md:text-left xl:mb-8">
              I love working with others to create beautiful design solutions.
              I've designed everything from brand illustrations to complete
              mobile apps. I'm also handy with a camera!
            </p>
            <a
              href="https://www.google.com"
              className="text-sm-mob text-off-white bg-soft-red hover:bg-soft-orange mb-24 py-2 px-7 md:text-sm-dsk md:py-4 md:px-12 rounded-full"
            >
              Free Consultation
            </a>
          </div>
        </div>
        <p className="text-center text-black text-2xl-mob mb-9 md:mb-14 md:text-3xl-dsk md:mt-7 xl:mt-24">
          My Work
        </p>
        <div
          id="imageDisplay"
          className="grid grid-flow-col scroll-auto overflow-y-auto overscroll-x-contain gap-3 md:gap-7 snap-mandatory snap-x"
          tabIndex={0}
          ref={imageDisplay}
        >
          <img
            src={imgSlide1}
            alt=""
            className="rounded-xl snap-center min-w-fit h-44 md:h-90"
          />
          <img
            src={imgSlide2}
            alt=""
            className="rounded-xl snap-center min-w-fit h-44 md:h-90"
          />
          <img
            src={imgSlide3}
            alt=""
            className="rounded-xl snap-center min-w-fit h-44 md:h-90"
          />
          <img
            src={imgSlide4}
            alt=""
            className="rounded-xl snap-center min-w-fit h-44 md:h-90"
          />
          <img
            src={imgSlide5}
            alt=""
            className="rounded-xl snap-center min-w-fit h-44 md:h-90"
          />
        </div>
        <div className="mx-4 flex flex-row justify-center flex-nowrap mt-8 mb-24 md:mt-14 md:mb-28">
          <div
            className="bg-black hover:bg-soft-purple hover:cursor-pointer p-6 rounded-full mr-4"
            onClick={() => {
              imageDisplay.current!.scrollBy({
                left: -100,
                behavior: 'smooth',
              });
            }}
          >
            <img src={arrowLeft} alt="" />
          </div>
          <div
            className="bg-black hover:bg-soft-purple hover:cursor-pointer p-6 rounded-full"
            onClick={() => {
              //document.body.querySelector('#imageDisplay')!.scrollBy({left: 40, behavior:'smooth'});
              imageDisplay.current!.scrollBy({ left: 100, behavior: 'smooth' });
            }}
          >
            <img src={arrowRight} alt="" />
          </div>
        </div>
        <div className="mx-4 flex flex-col items-center bg-black px-6 py-12 rounded-lg md:pt-14 md:pb-16 md:mx-10 xl:mx-40 md:px-24 xl:flex-row xl:justify-between">
          <div className="flex flex-col items-center xl:items-start xl:w-7/12">
            <p className="text-off-white text-3xl-mob text-center md:text-3xl-dsk xl:text-left xl:text-4xl-dsk">
              Book a call with me
            </p>
            <p className="text-off-white text-base-mob text-center my-9 md:text-base-dsk xl:text-left xl:text-base-dsk">
              I'd love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>
          <a
            href="https://www.google.com"
            className="text-off-white text-sm-mob bg-soft-red hover:bg-soft-orange py-2 px-7 rounded-full md:py-4 md:px-12 md:text-sm-dsk"
          >
            Free Consultation
          </a>
        </div>
      </main>
      <footer className="mx-4 mb-4 pt-10 flex flex-col flex-nowrap justify-between items-center md:pt-14 md:mx-10 xl:mx-40">
        <div className="flex flex-row flex-nowrap justify-between items-center w-full">
          <img src={logo} alt="" className="w-12 md:w-16" />
          <a
            href="https://www.google.com"
            className="text-off-white text-sm-mob bg-black hover:bg-soft-purple py-2 px-7 rounded-full md:py-4 md:px-12 md:text-sm-dsk"
          >
            Free Consultation
          </a>
        </div>
        <p className='text-center mt-8'>
          Challenge by
          <a
            className='text-soft-purple ml-1 hover:text-purple-700'
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            className='text-soft-purple ml-1 hover:text-purple-700'
            href="https://www.frontendmentor.io/profile/Ahmed96Mah"
            target="_blank"
            rel="noreferrer"
          >
            Ahmed Mahmoud Abdalwahab
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
