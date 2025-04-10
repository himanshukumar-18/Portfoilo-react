
const Footer = () => {
    return (
        <>
            <footer className="py-[3rem] flex items-center w-[100%] justify-between">
                <div className="footerLogo flex gap-3 items-center">
                    <div className="fLogo">
                        <img className="h-[30px] footer-L" src="http://d1ujqdpfgkvqfi.cloudfront.net/favicon-generator/htdocs/favicons/2015-01-06/25b646889572c80c97cfd5548af8d736.ico" alt="footerlogo" />
                    </div>

                    <div className="logoHead">
                        <h2 className="text-[#ffffff] text-3xl font-[200]">Portfolio</h2>
                    </div>
                </div>

                <div className="copyRight text-[#fff] text-[.9rem]">
                    <p>Copyright © 2025 Himanshu Kumar. All Rights Reserved.</p>
                </div>


                <div className="footerLink">
                    <div className="footerSocial">
                        <ul className="flex items-center gap-[30px]">
                            <li className="hover:text-[#f9004d] duration-200 hover:translate-y-[-3px] text-[#fff] rounded-[50%] w-[40px] h-[40px] flex justify-center items-center outline-1">
                                <a target="_blank" href="https://www.instagram.com/webwithhimanshu/?__pwa=1">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>

                            <li className="hover:text-[#f9004d] duration-150 hover:translate-y-[-3px] text-[#fff] rounded-[50%] w-[40px] h-[40px] flex justify-center items-center outline-1">
                                <a target="_blank" href="https://www.youtube.com/channel/UCk-M7JffDKUr28MDYUdELjQ">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>

                            <li className="hover:text-[#f9004d] duration-150 hover:translate-y-[-3px] text-[#fff] rounded-[50%] w-[40px] h-[40px] flex justify-center items-center outline-1">
                                <a target="_blank" href="https://github.com/frontenddev-himanshu">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>

                            <li className="hover:text-[#f9004d] duration-150 hover:translate-y-[-3px] text-[#fff] rounded-[50%] w-[40px] h-[40px] flex justify-center items-center outline-1">
                                <a target="_blank" href="https://www.linkedin.com/in/himanshu-kumar-8b5845313/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer