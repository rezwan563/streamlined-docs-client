import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { SiDocsdotrs } from "react-icons/si";
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
    <div className="f-container">
        <div className="f-component">
        <div className="n-title">
        <div className="flex items-center lg:gap-3">
              <SiDocsdotrs className="text-red-600 lg:text-3xl" />
              <p className="lg:text-3xl font-bold">STREAMLINED DOCS</p>
            </div>
        </div>
        </div>
        <div className="f-component">
            <h2 className='mb-5 text-bold text-xl'>Company</h2>
            <p>About Us</p>
            <p>FAQ</p>
        </div>
        <div className="f-component">
            <h2 className='mb-5 text-bold text-xl'>Contact</h2>

            <p> Email: contact@streamlinedocs.com</p>
            <p>Phone No: 03157848</p>
            <div className="icons space-x-2">
                <div className="icon">
                    <FaFacebookF></FaFacebookF>
                </div>
                <div className="icon">
                    <FaInstagram></FaInstagram>
                </div>
                <div className="icon">
                    <FaLinkedin></FaLinkedin>
                </div>

            </div>
        </div>

        <hr />
    </div>
    <p className="mb-10">Copyright 2023 Streamlined Docs. All Rights Reserved.</p>


</footer>
  );
};

export default Footer;
