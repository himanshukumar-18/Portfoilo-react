import './App.css'
import Nav from './Components/Nav'
import thumbnail from './assets/about-profile.png'
import { useState } from "react";

function App() {

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Main skills",
      content: (
        <div className='mainSkill h-[200px]'>
          <h3 className="font-bold text-[#717173]">User experience design - UI/UX</h3>
          <p className='mb-3 text-[#7e7e7e]'>Delight the user and make it work.</p>


          <h3 className="font-bold text-[#717173]">Web and user interface design - Development</h3>
          <p className='mb-3 text-[#7e7e7e]'>Websites, web experiences, ...</p>


          <h3 className="font-bold text-[#717173]">Interaction design - Animation</h3>
          <p className='text-[#7e7e7e]'>I like to move it move it.</p>
        </div>
      )
    },

    {
      id: 1,
      label: "Education & Certification",
      content:
        <div className='education h-[200px]'>
          <p>List of awards and recognitions.</p>
        </div>
    },

    {
      id: 2,
      label: "Experience",
      content:
        <div className='exp h-[200px]'>
          <p>Professional experience details.</p>
        </div>
    },
  ];


  return (
    <>
      {/* hero page */}
      <div className="heroPage w-full h-[95vh] px-[10rem]">
        <div className="navContainer">
          <Nav />
        </div>

        {/* inner text */}
        <div className="selfContent mt-[12rem] w-[100%]">
          <span className='skillSet text-[#1f1f25] tracking-[5px] uppercase text-[1rem]'>
            Web Deveolper
          </span>

          <h2 className='text-[#1f1f25] text-[4rem] font-[900] flex gap-4 w-[45%]'>
            Hello, I’m <span className='text-[#f9004d]'>Himanshu</span>
          </h2>

          <h2 className='text-[#1f1f25] text-[4rem] font-[900] flex gap-4 w-[45%]'>
            Welcome to my World.
          </h2>
        </div>
      </div>



      {/* about page */}
      <div className="aboutMe w-[100%] px-[10rem] py-[50px]">
        <div className="aboutContent flex items-center">
          <div className="thumbnail w-[40%] shadow-2xl">
            <img className='h-[700px] w-[100%] object-cover rounded-xl' src={thumbnail} alt="" />
          </div>

          <div className="aboutText w-[60%] pl-[50px]">
            <h2 className='text-[3rem] font-[800]'>About Me</h2>

            <p className='text-[1rem] font-[300] leading-8'>As a web developer, I specialize in creating dynamic, user-friendly websites and web applications. With a strong foundation in front-end, I am proficient in HTML, CSS, JavaScript, and various frameworks like React, Angular, and Node.js. I focus on delivering high-quality, responsive, and efficient web solutions, ensuring seamless user experiences across devices and platforms. My passion for coding drives me to continuously learn and stay updated with the latest trends and technologies in the web development industry.</p>

            <div className="contentChange mt-[40px]">
              <div className="w-full ">
                <div className="switchContainer flex flex-wrap">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`switchBtn mr-8 w-fix pb-1 text-lg font-medium relative ${activeTab === index ? "text-red-500" : "text-[#1d1d24]"}`}
                    >
                      {tab.label}
                      {activeTab === index && <div className="absolute left-0 bottom-0 w-[60%] h-[.2rem] bg-red-500"></div>}
                    </button>
                  ))}
                </div>
                <div className="mt-[30px]">
                  {tabs[activeTab].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
