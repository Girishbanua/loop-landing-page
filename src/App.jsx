import React from "react";
import { useState } from "react";

const App = () => {
  const [menu, setMenu] = useState(true);  
  return (
    <div>
      <header className="p-6 bg-[url(/images/mobile/image-hero.jpg)] bg-cover bg-no-repeat h-[675px] ">
        <nav className="flex items-center justify-between pt-4">
          <div className="z-30">
            <img src="images/logo.svg" alt="logo" />
          </div>
          {menu && (
            <button onClick={() => setMenu(false)} className="z-30">
              <img src="images/icon-hamburger.svg" alt="menu" />
            </button>
          )}
          {!menu && (
            <>
              <button onClick={() => setMenu(true)} className="z-30">
                <img src="images/icon-close.svg" alt="menu" />
              </button>
              <div className="bg-black text-white fixed z-20 h-full w-full top-0 left-0 uppercase text-[7vw] font-light flex items-center p-6">
                <NavList />
              </div>
            </>
          )}
        </nav>
        <div className="hero mt-44 text-white border-2 border-white p-5 ">
          <h1 className="font-light text-[12vw] leading-none">
            immersive experiences that deliver
          </h1>
        </div>
      </header>
      <main className="mt-10 p-6 ">
        <section className="interactive">
          <div>
            <img src="images/mobile/image-interactive.jpg" alt="interactive" />
          </div>
          <div className="text-center mt-8">
            <h1>the leader in interactive vr</h1>
            <p className="text-Dark-Gray font-family2 px-6 py-3">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <section className="creation text-center mt-20">
          <div>
            <h1>our creations</h1>
          </div>
          <div className="creationGallery mt-10 ">
            <div className="bg-[url(/images/mobile/image-deep-earth.jpg)]">
              <div></div>
              <p>Deep earth</p>
            </div>
            <div className="bg-[url(/images/mobile/image-night-arcade.jpg)]">
              <div></div>
              <p>Night arcade</p>
            </div>
            <div className="bg-[url(/images/mobile/image-soccer-team.jpg)]">
              <div></div>
              <p>Soccer team vr</p>
            </div>
            <div className="bg-[url(/images/mobile/image-grid.jpg)]">
              <div></div>
              <p>the grid</p>
            </div>
            <div className="bg-[url(/images/mobile/image-from-above.jpg)]">
              <div></div>
              <p>from up above vr</p>
            </div>

            <div className="bg-[url(/images/mobile/image-pocket-borealis.jpg)]">
              <div></div>
              <p>pocket borealis</p>
            </div>
            <div className="relative bg-[url(/images/mobile/image-curiosity.jpg)]">
              <div></div>
              <p>The curiosity</p>
            </div>
            <div className="bg-[url(/images/mobile/image-fisheye.jpg)]">
              <div></div>
              <p>make it fisheye</p>
            </div>
          </div>
          <button className="text-center text-sha mt-10 border-2 w-52 h-14">
            see all
          </button>
        </section>
      </main>
      <footer className="bg-black mt-20 pb-15 text-white text-center">
        <div className="mt-20 w-full pt-20 pb-10 items-center flex justify-center">
          <img src="images/logo.svg" alt="logo" />
        </div>
        <NavList />
        <div className="flex gap-4 items-center justify-center mt-10 mb-4">
          <img src="images/icon-facebook.svg" alt="facebook" loading="lazy" />
          <img src="images/icon-instagram.svg" alt="instagram" loading="lazy" />
          <img src="images/icon-pinterest.svg" alt="pinterest" loading="lazy" />
          <img src="images/icon-twitter.svg" alt="twitter" loading="lazy" />
        </div>
        <span>© 2021 Loopstudios. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default App;

export function NavList() {
  return (
    <>
      <ul className="flex flex-col gap-4">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </>
  );
}
