import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BiMessageError } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar.js"
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [sideShow, setSideShow] = useState(false)
  const [t, i18n] = useTranslation()

  return (
    <div className="w-full bg-white fixed top-0 z-10">
      <div className=" container px-4 py-3 flex justify-between flex-row-reverse items-center">
        <div>
          <BiMessageError className="text-2xl cursor-pointer" />
        </div>
        <div>
          <span className="text-bold font-sans text-xl">
            {t('Task Manager')}
          </span>
        </div>
        <div>
          <BiMenuAltRight onClick={() => setSideShow(!sideShow)} className="text-3xl cursor-pointer" />
        </div>
        {sideShow && <Sidebar setShow={setSideShow} show={sideShow} />}
      </div>
    </div>
  );
}

export default Navbar;