import { useState } from "react"
import linkedinImg from "../assets/contact imgs/linkedinImg.png"
import githubImg from "../assets/contact imgs/github.png"

export const Appbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 rounded-full my-1 bg-white transition ease transform duration-300`;

    function onClickHandler(){
        setIsOpen(!isOpen)
    }


    return <div className="fixed flex flex-row-reverse gap-5 z-50 right-0 pr-10 pt-5">
      
      <button
      className="flex flex-col h-10 w-10 bg-black rounded  justify-center items-center "
      onClick={onClickHandler}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-100"
            : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-100"
            : "opacity-100"
        }`}
      />
    </button>

    {/* colasping  */}

      <div className="flex flex-row-reverse items-center gap-2  lg:gap-3">

        <div className={` ${isOpen ? ' ' : 'hidden' } rounded-sm` }>
          <a href="https://www.linkedin.com/in/kiranjot-singh-7302b224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  >
                <img src={linkedinImg} className="w-10 lg:w-12" />
              </a>
        </div>
        <div className={` ${isOpen ? ' ' : 'hidden' } rounded-sm ` }>
          <a href="https://github.com/singhkiranjot"  >
                <img src={githubImg} className="w-8 lg:w-10 bg-white rounded-lg" />
            </a>
        </div>
      </div>
    </div>
}