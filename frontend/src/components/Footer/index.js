import React from 'react'; 
import { GrLinkedin, GrGithub } from 'react-icons/gr';  
import { IconContext } from 'react-icons/lib';
import './Footer.css'; 


const Footer = () => {
    return (
        <div className={"footer_container"}>
            <div className={"footer_proj"}>
                <span className={"footer_proj"}>
                    <IconContext.Provider value={{className: "footer_icon_git"}}>
                        <GrGithub/>
                    </IconContext.Provider>
                    <span>
                        <a className={"footer_link"} href= 'https://github.com/Preezey24/say-Cheese-'>
                            say Cheese
                        </a>
                    </span>
                </span>
            </div>
            <div className={"footer_me"}>
                <span className={"footer_linked"}>
                    <span>
                        <IconContext.Provider value={{className: "footer_icon_linked"}}>
                            <GrLinkedin/>
                        </IconContext.Provider>
                    </span>
                    <span style={{height: "50%", position: "absolute", top: "15%"}}>
                        <a className={"footer_link"} href= 'https://www.linkedin.com/in/rhysprevite/'>
                            Rhys Previte
                        </a>
                    </span>
                </span>
                <span className={"footer_git"}>
                    <span>
                        <IconContext.Provider value={{className: "footer_icon_git"}}>
                            <GrGithub/>
                        </IconContext.Provider>
                    </span>
                    <span>
                        <a className={"footer_link"} href= 'https://github.com/Preezey24'>
                            My GitHub
                        </a>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Footer;