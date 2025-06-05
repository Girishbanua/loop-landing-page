import React from "react";
import { useState } from "react";

const App = () => {
  const [menu, setMenu] = useState(true);
  return (
    <div>
      <header className="p-6 sm:px-[10vw] sm:py-[5vh] xl:py-[10vh] xl:px-[14vw] bg-[url(/images/mobile/image-hero.jpg)] sm:bg-[url(/images/desktop/image-hero.jpg)] bg-cover bg-no-repeat h-[675px] sm:h-full w-full ">
        <nav className="flex items-center justify-between pt-4 md:pt-0">
          <div className="z-30">
            <img src="images/logo.svg" alt="logo" />
          </div>
          {menu && (
            <button onClick={() => setMenu(false)} className="sm:hidden z-30 ">
              <img src="images/icon-hamburger.svg" alt="menu" />
            </button>
          )}
          {!menu && (
            <>
              <button onClick={() => setMenu(true)} className="sm:hidden z-30">
                <img src="images/icon-close.svg" alt="menu" />
              </button>
              <div className="bg-black text-white fixed z-20 h-full w-full top-0 left-0 uppercase text-[7vw] font-light flex items-center p-6">
                <NavList />
              </div>
            </>
          )}
          <div className="hidden md:block"><NavList /></div>
        </nav>
        <div className="hero mt-44 sm:mt-32 text-white border-2 border-white p-5 md:p-8 sm:w-[50vw] md:w-[35vw] ">
          <h1 className="font-light text-[12vw] sm:text-[4vw] leading-none">
            immersive experiences that deliver
          </h1>
        </div>
      </header>
      <main className="mt-10 p-6 md:mt-30 md:px-[10vw] xl:px-[15vw] ">
        <section className="interactive relative">
          <div>
            <img
              src="images/mobile/image-interactive.jpg"
              alt="interactive"
              className="xl:hidden"
            />
            <img
              src="images/desktop/image-interactive.jpg"
              alt="interactive"
              className="hidden xl:block"
            />
          </div>
          <div className="text-center mt-8 xl:w-[33vw] md:w-[50vw] md:px-10 md:pt-7 md:text-left bg-white md:absolute z-20 md:bottom-0 md:-right-10">
            <h1 className="xl:text-[3vw] md:text-[3vw] text-4xl md:py-5 leading-none text-gray-800">
              the leader in interactive vr
            </h1>
            <p className="text-gray-500 font-family2 px-6 md:py-0 xl:px-0 pl-3 md:p-0 md:text-justify md:text-xs xl:leading-relaxed xl:text-sm xl:w-[95%] text-center pt-5">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <section className="creation text-center mt-20">
          <div className="md:flex items-center justify-between">
            <h1 className="text-4xl xl:text-[3vw]">our creations</h1>
            <button className="hidden text-center border-2 w-52 h-14 uppercase hover:bg-black hover:text-white cursor-pointer md:block">
              see all
            </button>
          </div>
          <div className="creationGallery mt-10 md:flex flex-wrap justify-between">
            <div className="bg-[url(/images/mobile/image-deep-earth.jpg)] md:bg-[url(/images/desktop/image-deep-earth.jpg)]">
              <div></div>
              <p>Deep earth</p>
            </div>
            <div className="bg-[url(/images/mobile/image-night-arcade.jpg)] md:bg-[url(/images/desktop/image-night-arcade.jpg)]">
              <div></div>
              <p>Night arcade</p>
            </div>
            <div className="bg-[url(/images/mobile/image-soccer-team.jpg)] md:bg-[url(/images/desktop/image-soccer-team.jpg)]">
              <div></div>
              <p>Soccer team vr</p>
            </div>
            <div className="bg-[url(/images/mobile/image-grid.jpg)] md:bg-[url(/images/desktop/image-grid.jpg)]">
              <div></div>
              <p>the grid</p>
            </div>
            <div className="bg-[url(/images/mobile/image-from-above.jpg)] md:bg-[url(/images/desktop/image-from-above.jpg)]">
              <div></div>
              <p>from up above vr</p>
            </div>

            <div className="bg-[url(/images/mobile/image-pocket-borealis.jpg)] md:bg-[url(/images/desktop/image-pocket-borealis.jpg)]">
              <div></div>
              <p>pocket borealis</p>
            </div>
            <div className="relative bg-[url(/images/mobile/image-curiosity.jpg)]  md:bg-[url(/images/desktop/image-curiosity.jpg)]">
              <div></div>
              <p>The curiosity</p>
            </div>
            <div className="bg-[url(/images/mobile/image-fisheye.jpg)] md:bg-[url(/images/desktop/image-fisheye.jpg)]">
              <div></div>
              <p>make it fisheye</p>
            </div>
          </div>
          <button className="text-center mt-10 border-2 w-52 h-14 uppercase hover:bg-black hover:text-white cursor-pointer md:hidden">
            see all
          </button>
        </section>
      </main>
      <footer className="bg-black mt-20 pb-15 text-white text-center md:flex items-center justify-around">
        <div className="mt-20 md:mt-0 w-full md:w-max pt-20 pb-10 items-center flex justify-center flex-col gap-6 md:items-start md:justify-start ">
          <img src="images/logo.svg" alt="logo" />
          <NavList />
        </div>
        <div className="md:flex items-end flex-col gap-4 ">
          <div className="flex gap-4 items-center justify-center mt-10 mb-4">
            <img src="images/icon-facebook.svg" alt="facebook" loading="lazy" />
            <img
              src="images/icon-instagram.svg"
              alt="instagram"
              loading="lazy"
            />
            <img
              src="images/icon-pinterest.svg"
              alt="pinterest"
              loading="lazy"
            />
            <img src="images/icon-twitter.svg" alt="twitter" loading="lazy" />
          </div>
          <span>© 2021 Loopstudios. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;

export function NavList() {
  return (
    <>
      <ul className="flex flex-col sm:flex-row text-white gap-4">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </>
  );
}
