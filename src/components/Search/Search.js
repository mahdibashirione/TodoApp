import { BiSearch } from "react-icons/bi";
import FilterCompleted from "../FilterCompleted/FilterCompleted";
import { useTranslation } from "react-i18next";

const Search = ({ filterCompleted, checkHandler, checkState, searchState, onChangeHandler }) => {

  const [t, i18n] = useTranslation()

  return (
    <div className="w-full bg-white ">
      <div className="w-full mx-auto container  flex items-center justify-between mt-[45px] p-4">
        <div className="w-2/3 md:w-1/3 flex items-center relative ml-1 ">
          <BiSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-slate-400 text-2xl" />
          <input value={searchState} onChange={onChangeHandler} className="bg-zinc-800 max-w-[400px] py-3 pr-10 text-md rounded-full outline-none text-white w-full" type={"text"} placeholder={t('Search...')} />
        </div>
        <div className="w-1/3 md:w-2/3 flex items-center mr-1 h-full">
          <FilterCompleted
            checkHandler={checkHandler}
            filterCompleted={FilterCompleted}
            checkState={checkState}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;