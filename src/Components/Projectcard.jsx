import ProjectBTn from "./projectBTn"


const Projectcard = ({ proTmg, webName, proLink }) => {
    return (
        <>
            <div className="Projects relative w-[32%] h-[600px] rounded-2xl overflow-hidden hover:scale-3d hover:scale-[1.08] duration-200">
                <img className='w-[100%] h-[100%] object-cover object-top' src={proTmg} alt="project01" />


                <div className="projectsDetails absolute w-[100%] flex flex-col items-center">
                    <span className='text-[#c6c9d8] capitalize text-[1rem]text-center'>Development</span>
                    <h3 className='text-[#ffffff] text-[1.8rem] font-[600]'>{webName}</h3>

                    <div className="live mt-15 hover:translate-y-[-10px] duration-200">
                        <ProjectBTn links={proLink} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projectcard