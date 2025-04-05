import './App.css'
import Nav from './Components/Nav'
import Projectcard from './Components/Projectcard';
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
          <h3 className="font-bold text-[#717173]">Web Development</h3>
          <p className='mb-3 text-[#7e7e7e]'>Delight the user and make it work.</p>


          <h3 className="font-bold text-[#717173]">Web and user interface design - Development</h3>
          <p className='mb-3 text-[#7e7e7e]'>Websites, web experiences, ...</p>


          <h3 className="font-bold text-[#717173]">Web Manage</h3>
          <p className='text-[#7e7e7e]'>It like to debugging and customize the code.</p>
        </div>
      )
    },

    {
      id: 1,
      label: "Education & Certification",
      content:
        <div className='education h-[200px]'>
          <h3 className="font-bold text-[#717173]">Web Development</h3>
          <p className='mb-3 text-[#7e7e7e]'>Arena Animation Hazaribag (2024 - 2025).</p>

          <h3 className="font-bold text-[#717173]">Collage</h3>
          <p className='mb-3 text-[#7e7e7e]'>Ananda Collage Hazaribag (JAC 2024 - 2028)</p>

          <h3 className="font-bold text-[#717173]">
            Higher Secoundry Education</h3>
          <p className='mb-3 text-[#7e7e7e]'>Barhi Inter Collage Barhi (JAC 2022 - 2024)</p>

          <h3 className="font-bold text-[#717173]">Secoundry Education</h3>
          <p className='mb-3 text-[#7e7e7e]'>Vivekananda Central School Hazaribag (CBSE 2010 - 2022)</p>
        </div>
    },

    {
      id: 2,
      label: "Experience",
      content:
        <div className='exp h-[200px]'>
          <p>I developed hands-on experience in making websites through projects and live project.</p>
        </div>
    },
  ];


  return (
    <>
      {/* hero page */}
      <div id='Home' className="heroPage w-full h-[95vh] px-[10rem]">
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
      <div id='About' className="aboutMe w-[100%] px-[10rem] py-[50px]">
        <div className="aboutContent flex items-center">
          <div className="thumbnail w-[40%] shadow-2xl">
            <img className='h-[700px] w-[100%] object-cover rounded-xl' src={thumbnail} alt="" />
          </div>

          <div className="aboutText w-[60%] pl-[50px]">
            <h2 className='text-[3rem] font-[800]'>About Me</h2>

            <p className='text-[1rem] font-[300] leading-8 text-[#717173]'>As a web developer, I specialize in creating dynamic, user-friendly websites and web applications. With a strong foundation in front-end, I am proficient in HTML, CSS, JavaScript, and various frameworks like React, and Jquery. I focus on delivering high-quality, responsive, and efficient web solutions, ensuring seamless user experiences across devices and platforms. My passion for coding drives me to continuously learn and stay updated with the latest trends and technologies in the web development industry.</p>

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




      {/* work section */}
      <div id='Work' className="projectContainer w-full px-[10rem] py-[50px]">
        <div className="projectHeader text-center">
          <h2 className='text-[3rem] font-[800] capitalize text-[#1f1f25]'>My latest projects</h2>
          <p className='text-[1rem] font-[300] text-[#717173]'>There is my all showcase projects</p>
        </div>

        <div className="projectWrapper mt-[50px]">
          <div className="projectRow flex justify-between">
            <Projectcard proTmg={"https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=600"} webName={"Blogging Website"} proLink={"https://frontenddev-himanshu.github.io/Blogging-Web"} />

            <Projectcard proTmg={"https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} webName={"Hotel Website"} proLink={"https://devhimanshukr.github.io/Canary-Inn/"} />

            <Projectcard proTmg={"https://images.pexels.com/photos/7307944/pexels-photo-7307944.jpeg?auto=compress&cs=tinysrgb&w=600"} webName={"Education Website"} proLink={"https://frontenddev-himanshu.github.io/SkillNation/"} />
          </div>


          <div className="projectRow row02 flex justify-between mt-9">
            <Projectcard proTmg={"https://images.pexels.com/photos/31377542/pexels-photo-31377542/free-photo-of-stunning-japanese-waterfall-in-autumn-foliage.jpeg?auto=compress&cs=tinysrgb&w=600"} webName={"Clean India Website"} proLink={"https://devhimanshukr.github.io/Clean-India/"} />

            <Projectcard proTmg={"https://images.pexels.com/photos/6214386/pexels-photo-6214386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} webName={"Ecommerce Website"} proLink={"https://frontenddev-himanshu.github.io/Ella-E-Commerce/"} />

            <Projectcard proTmg={"https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} webName={"School Website"} proLink={"https://udayanpublicschool.org/"} />
          </div>


          <div className="projectRow row02 flex justify-between mt-9">
            <Projectcard proTmg={"https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} webName={"Car Website"} proLink={"https://frontenddev-himanshu.github.io/Rental-Cat-Web/"} />

          <Projectcard proTmg={"https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} webName={"Save Animal Website"} proLink={"https://frontenddev-himanshu.github.io/Ella-E-Commerce/"} />

            <Projectcard proTmg={"https://images.pexels.com/photos/31440126/pexels-photo-31440126/free-photo-of-industrial-harbor-cranes-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600"} webName={"Business Landing Page"} proLink={"https://devhimanshukr.github.io/Business/"} />
          </div>
        </div>
      </div>



    </>
  )
}

export default App
