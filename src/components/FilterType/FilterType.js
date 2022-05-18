import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const FilterType = ({ setType, type }) => {

  const [t, i18n] = useTranslation()
  return (
    <div className="w-full bg-white sticky top-[54px]">
      <div className="w-full container pb-3 pt-1 pr-4 flex items-center justify-end">
        <div className="w-9 h-9 flex items-center justify-center ">
          <BiFilterAlt className="text-2xl" />
        </div>
        <div className="w-full flex items-center justify-start overflow-x-scroll">
          <span onClick={(e) => setType(e.target.dataset.value)} className={`font-sans whitespace-nowrap font-lg border border-zinc-800 bg-white py-2 px-4 rounded-full mr-2 select-none cursor-pointer ${type === "" && "bg-zinc-800 text-white"}`} data-value={""} >
            {t('All')}</span>
          <span onClick={(e) => setType(e.target.dataset.value)} className={`font-sans whitespace-nowrap font-lg border border-zinc-800 bg-white py-2 px-4 rounded-full mr-2 select-none cursor-pointer ${type === "Home" && "bg-zinc-800 text-white"}`} data-value={"Home"} >
            {t("Home")}</span>
          <span onClick={(e) => setType(e.target.dataset.value)} className={`font-sans whitespace-nowrap font-lg border border-zinc-800 bg-white py-2 px-4 rounded-full mr-2 select-none cursor-pointer ${type === "School" && "bg-zinc-800 text-white"}`} data-value={"School"} >
            {t("School")}</span>
          <span onClick={(e) => setType(e.target.dataset.value)} className={`font-sans whitespace-nowrap font-lg border border-zinc-800 bg-white py-2 px-4 rounded-full mr-2 select-none cursor-pointer ${type === "EveryDay" && "bg-zinc-800 text-white"}`} data-value={"EveryDay"} >
            {t("EveryDay")}</span>
          <span onClick={(e) => setType(e.target.dataset.value)} className={`font-sans whitespace-nowrap font-lg border border-zinc-800 bg-white py-2 px-4 rounded-full mr-2 select-none cursor-pointer ${type === "Work" && "bg-zinc-800 text-white"}`} data-value={"Work"} >
            {t("Work")}</span>
          <span onClick={(e) => setType(e.target.dataset.value)} className={`font-sans whitespace-nowrap font-lg border border-zinc-800 bg-white py-2 px-4 rounded-full mr-2 select-none cursor-pointer ${type === "Lifestyle" && "bg-zinc-800 text-white"}`} data-value={"Lifestyle"} >
            {t("Lifestyle")}</span>
          <span onClick={(e) => setType(e.target.dataset.value)} className={`font-sans whitespace-nowrap font-lg border border-zinc-800 bg-white py-2 px-4 rounded-full mr-2 select-none cursor-pointer ${type === "Activity" && "bg-zinc-800 text-white"}`} data-value={"Activity"} >
            {t("Activity")}</span>
        </div>
      </div>
    </div>
  );
}

export default FilterType;