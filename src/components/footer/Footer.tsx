import { Socials } from "@/app/types/SocialType";
import { SocialIcon } from "react-social-icons";

type P = {
  social: Socials[];
};

const Footer = ({ social }: P) => {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const currentYear = getCurrentYear();
  return (
    <footer className="bg-violet-900 w-full py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <div className="ml-5 flex items-center space-x-6">
          {social?.map((social: Socials, index: number) => (
            <SocialIcon
              key={index}
              style={{ height: 25, width: 25 }}
              bgColor="#F1F6F9"
              fgColor="#793FEF"
              className="hover:scale-125 duration-200"
              target="_blank"
              url={social.url}
            />
          ))}
        </div>
        <p className="text-white mr-5">&copy; {currentYear} Portfolio </p>
      </div>
    </footer>
  );
};

export default Footer;
