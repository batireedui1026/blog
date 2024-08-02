import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-between px-64">
        <div>
          <h1 className="font-bold">About</h1>
          <p className="w-72 text-gray-400">
            claa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="text-gray-400">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-5">
          <FaFacebook />
          <FaTwitter />
          <FaInstagramSquare />
          <FaLinkedin />
        </div>
      </div>
      <div className="h-2 w-[500px] text-black bt-solid"></div>
      <div className="flex justify-between px-60 pt-8">
        <div>
          <img className="w-14 h-7" src="/image/copy.png" />
        </div>
        <div className="flex gap-4 text-gray-400">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
