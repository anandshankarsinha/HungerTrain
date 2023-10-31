import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="">
      <h4 className="p-4 text-center bg-[#FFB000]">
        This site is developed by {user.name} with ❤️
      </h4>
    </div>
  );
};

export default Footer;
