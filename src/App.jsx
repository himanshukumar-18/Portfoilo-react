import "./App.css";
import Footer from "./Components/Footer";
import HireFrom from "./Components/HireFrom";
import Nav from "./Components/Nav";
import Projectcard from "./Components/Projectcard";
import thumbnail from "./assets/about-profile.png";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Main skills",
      content: (
        <div className="mainSkill h-[200px]">
          <h3 className="font-bold text-[#717173]">Front-end</h3>
          <p className="mb-3 text-[#7e7e7e]">
            <span>HTML</span>, <span>CSS</span>, <span>JAVASCRIPT</span>, <span>REACT</span>, <span>TAILWIND CSS</span>
          </p>

          <h3 className="font-bold text-[#717173]">
            Back-end
          </h3>
          <p className="mb-3 text-[#7e7e7e]">
            <span>NODE JS</span>, <span>EXPRESS JS</span>, <span>API</span>
          </p>

          <h3 className="font-bold text-[#717173]">Database</h3>
          <p className="text-[#7e7e7e] mb-3">
            <span>MONGODB</span>, <span>MYSQL</span>
          </p>


          <h3 className="font-bold text-[#717173]">Version Control</h3>
          <p className="text-[#7e7e7e]">
            <span>GIT</span>, <span>GITHUB</span>
          </p>
        </div>
      ),
    },

    {
      id: 1,
      label: "Education & Certification",
      content: (
        <div className="education h-[200px]">
          <h3 className="font-bold text-[#717173]">Bachelor Degree (BCA)</h3>
          <p className="mb-3 text-[#7e7e7e]">
            Jharkhand Rai University Ranchi (2025 - 2028)
          </p>

          <h3 className="font-bold text-[#717173]">Web Development Course</h3>
          <p className="mb-3 text-[#7e7e7e]">
            Arena Animation Hazaribag (6 month's With Certificate)
          </p>

          <h3 className="font-bold text-[#717173]">
            Higher Secoundry Education
          </h3>
          <p className="mb-3 text-[#7e7e7e]">
            Barhi Inter Collage Barhi 57% (JAC 2022 - 2024)
          </p>

          <h3 className="font-bold text-[#717173]">Secoundry Education</h3>
          <p className="mb-3 text-[#7e7e7e]">
            Vivekananda Central School Hazaribag 60% (CBSE 2010 - 2022)
          </p>
        </div>
      ),
    },

    {
      id: 2,
      label: "Experience",
      content: (
        <div className="exp h-[200px]">
          <p>
            I developed hands-on experience in making websites through projects
            and live project.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* hero page */}
      <div id="Home" className="heroPage w-full h-[100vh] px-[10rem]">
        <div className="navContainer">
          <Nav />
        </div>

        {/* inner text */}
        <div className="selfContent mt-[12rem] w-[100%]">
          <span className="skillSet text-[#1f1f25] tracking-[5px] uppercase text-[1rem]">
            Full Stack Developer
          </span>

          <h2 className="text-[#1f1f25] text-[4rem] font-[900] flex gap-4 w-[45%]">
            Hello, I’m <span className="text-[#f9004d]">Himanshu</span>
          </h2>

          <h2 className="text-[#1f1f25] text-[4rem] font-[900] flex gap-4 w-[45%]">
            Welcome to my World.
          </h2>
        </div>
      </div>

      {/* about page */}
      <div id="About" className="aboutMe w-[100%] px-[10rem] py-[50px]">
        <div className="aboutContent flex">
          <div className="thumbnail w-[40%] shadow-2xl">
            <img
              className="h-[700px] w-[100%] object-cover rounded-xl"
              src={thumbnail}
              alt=""
            />
          </div>

          <div className="aboutText w-[60%] pl-[50px]">
            <h2 className="text-[3rem] font-[800]">About Me</h2>

            <p className="text-[1rem] font-[300] leading-8 text-[#717173]">
              As a <strong> Full Stack Developer </strong>, I specialize in building scalable, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I bring a deep understanding of modern JavaScript development and an eye for clean, maintainable code. With experience in both frontend and backend, I deliver full-stack solutions that are optimized for performance, usability, and security. My goal is to bridge the gap between design and technology—creating intuitive user interfaces backed by robust server-side logic.


            </p>

            <div className="contentChange mt-[30px]">
              <div className="w-full ">
                <div className="switchContainer flex flex-wrap">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`switchBtn mr-8 w-fix pb-1 text-lg font-medium relative ${activeTab === index ? "text-red-500" : "text-[#1d1d24]"
                        }`}
                    >
                      {tab.label}
                      {activeTab === index && (
                        <div className="absolute left-0 bottom-0 w-[60%] h-[.2rem] bg-red-500"></div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-[30px]">{tabs[activeTab].content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* work section */}
      <div id="Work" className="projectContainer w-full px-[10rem] py-[50px]">
        <div className="projectHeader text-center">
          <h2 className="text-[3rem] font-[800] capitalize text-[#1f1f25]">
            My latest projects
          </h2>
          <p className="text-[1rem] font-[300] text-[#717173]">
            There is my all showcase projects
          </p>
        </div>

        <div className="projectWrapper mt-[50px]">
          <div className="projectRow flex justify-between">
            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              webName={"Blogging Website"}
              proLink={"https://frontenddev-himanshu.github.io/Blogging-Web"}
            />

            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              webName={"Hotel Website"}
              proLink={"https://devhimanshukr.github.io/Canary-Inn/"}
            />

            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/7307944/pexels-photo-7307944.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              webName={"Education Website"}
              proLink={"https://frontenddev-himanshu.github.io/SkillNation/"}
            />
          </div>

          <div className="projectRow row02 flex justify-between mt-9">
            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/31377542/pexels-photo-31377542/free-photo-of-stunning-japanese-waterfall-in-autumn-foliage.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              webName={"Clean India Website"}
              proLink={"https://devhimanshukr.github.io/Clean-India/"}
            />

            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/6214386/pexels-photo-6214386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              webName={"Ecommerce Website"}
              proLink={
                "https://frontenddev-himanshu.github.io/Ella-E-Commerce/"
              }
            />

            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              webName={"School Website"}
              proLink={"https://udayanpublicschool.org/"}
            />
          </div>

          <div className="projectRow row02 flex justify-between mt-9">
            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              webName={"Car Website"}
              proLink={"https://frontenddev-himanshu.github.io/Rental-Cat-Web/"}
            />

            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              webName={"Save Animal Website"}
              proLink={
                "https://frontenddev-himanshu.github.io/Ella-E-Commerce/"
              }
            />

            <Projectcard
              proTmg={
                "https://images.pexels.com/photos/4021802/pexels-photo-4021802.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              webName={"Doctor Website"}
              proLink={"https://devhimanshukr.github.io/Hospital/"}
            />
          </div>
        </div>
      </div>

      {/* hire me */}
      <div id={'Contact'} className="hireMe w-full px-[10rem] py-[50px]">
        <div className="hireWrapper flex">
          <div className="hireFrom w-[49%]">
            <h2 className="text-[3rem] font-[800] capitalize text-[#1f1f25]">
              Hire Me.
            </h2>

            <p className="text-[1rem] font-[300] text-[#717173] w-[70%]">
              I am available for Jobs, freelance work. Connect with me via
              phone: 6201030273 or email: rajh5343@gmail.com.
            </p>

            <div className="hForm mt-[50px]">
              <HireFrom />

              <button className="uppercase bg-[#f9004d] px-[50px] rounded-[5px] mt-[20px] text-[#ffffff] py-[10px] hover:bg-[#ffffff] hover:text-[#f9004d] duration-100 hover:border-[2px]">
                Submit
              </button>
            </div>
          </div>

          <div className="hireImg w-[49%] h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[100%] w-[100%] object-cover"
              alt="Contact Img"
            />
          </div>
        </div>
      </div>




      <div className="footerContainer w-full px-[10rem] mt-[80px] bg-[#1e1f25]">
        <Footer />
      </div>
    </>
  );
}

export default App;
