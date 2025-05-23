import { useState } from "react";
import cv from "./Himanshu Kumar cv.pdf.pdf"
import cer from "./Himanshu_Certificate.pdf.pdf"

const Nav = () => {

  const [Open, setOpen] = useState(false)

  const toggelMenue = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <>
      <nav className="w-full pt-12 flex items-center justify-between">
        <div className="navLinks flex items-center gap-[50px]">
          <div className="logo h-[70px] w-[70px] bg-[#000] rounded-full flex justify-center items-center">
            <img
              className="h-[30px]"
              src="http://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2015-01-06/25b646889572c80c97cfd5548af8d736.ico"
              alt=""
            />
          </div>

          <ul className={`navL flex gap-10 font-[500] text-[#1d1d24] duration-200 ${Open ? 'open' : ''}`}>

            <div className="c-hamb">
              <div className="hamb hidden" onClick={toggelMenue}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>

            <li className="hover:text-[#f9004d] duration-150 f-list">
              <a href="#Home">Home</a>
            </li>

            <li className="hover:text-[#f9004d] duration-150">
              <a href="#About">About</a>
            </li>

            <li className="hover:text-[#f9004d] duration-150">
              <a href="#Work">Work</a>
            </li>

            <li className="hover:text-[#f9004d] duration-150">
              <a target="_blank" href={cer}>Certificate</a>
            </li>

            <li className="hover:text-[#f9004d] duration-150">
              <a href="#Contact">Contact</a>
            </li>


            <div className="cv res-cv hidden">
              <button className="hover:translate-y-[-3px] duration-200">
                <a
                  href={cv}
                  target="_blank"
                  className="px-[45px] py-[10px] outline-2 outline-[#1d1d24] rounded-[5px] hover:bg-[#f9004d] hover:text-[#ffffff] hover:outline-[#f9004d] duration-150 text-[1rem]"
                >
                  CV
                </a>
              </button>
            </div>
          </ul>
        </div>

        <div className="socialCv flex gap-10">
          <div className="socials">
            <ul className="flex gap-8 text-[1rem]">
              {/* <li className="hover:text-[#f9004d] duration-200 hover:translate-y-[-3px]">
                <a target="_blank" href="https://www.instagram.zcom/webwithhimanshu/?__pwa=1">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li className="hover:text-[#f9004d] duration-150 hover:translate-y-[-3px]">
                <a target="_blank" href="https://www.youtube.com/channel/UCk-M7JffDKUr28MDYUdELjQ">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li> */}

              <li className="hover:text-[#f9004d] duration-150 hover:translate-y-[-3px]">
                <a target="_blank" href="https://github.com/himanshukumar-18">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>

              <li className="hover:text-[#f9004d] duration-150 hover:translate-y-[-3px]">
                <a target="_blank" href="https://www.linkedin.com/in/himanshu-kumar-8b5845313/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="cv">
            <button className="hover:translate-y-[-3px] duration-200">
              <a
                target="_blank"
                href={cv}
                className="px-[45px] py-[10px] outline-2 outline-[#1d1d24] rounded-[5px] hover:bg-[#f9004d] hover:text-[#ffffff] hover:outline-[#f9004d] duration-150 text-[1rem]"
              >
                CV
              </a>
            </button>
          </div>

          <div className="hamb hidden" onClick={toggelMenue}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
