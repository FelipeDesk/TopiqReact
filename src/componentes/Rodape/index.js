import './Rodape.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank">
                            <FaLinkedin color='#FFF' size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.x.com" target="_blank">
                            <FaSquareXTwitter color='#FFF' size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <FaInstagram color='#FFF' size={40}/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Developed By Felipe Santiago
                </p>
            </section>
        </footer>
    )
}

export default Rodape