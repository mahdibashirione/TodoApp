import { BiX } from "react-icons/bi";
import { HiGlobe } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Sidebar = ({ setShow, show }) => {
  const [t, i18n] = useTranslation()

  return (
    <div className="w-[100vw] h-[100vh]  flex text-white font-sans fixed right-0 top-0">
      <div className="w-[65vw] md:max-w-[350px] h-[100vh] bg-zinc-800 text-white font-sans px-2">
        <div className="w-full flex items-center justify-between h-[50px] border-b border-zinc-500">
          <span className="select-none">{t("Sidebar")}</span>
          <BiX onClick={() => setShow(!show)} className="text-3xl cursor-pointer" />
        </div>
        <ul className="w-full flex flex-col items-start mt-2 gap-1">
          <li className="w-full h-[50px] hover:bg-zinc-700 cursor-pointer flex items-center justify-start rounded-md ">
            <HiGlobe className="text-3xl" />
            <span className="mr-2">{t("Language")}</span>
          </li>
          <li className="w-full h-[50px] hover:bg-zinc-700 cursor-pointer flex items-center justify-start rounded-md ">
            <HiMoon className="text-3xl" />
            <span className="mr-2">{t("Theme")}</span>
          </li>
        </ul>
      </div>
      <div onClick={() => setShow(!show)} className="w-[35vw] md:w-full h-[100vh] bg-[rgba(0,0,0,0.4)]"></div>
    </div>
  );
}

export default Sidebar;