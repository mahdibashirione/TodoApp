import Select from 'react-select';
import { useTranslation } from "react-i18next";

const FilterCompleted = ({ checkHandler, checkState }) => {

  const [t, i18n] = useTranslation()

  const options = [
    { value: '', label: t('All') },
    { value: 'true', label: t('Check') },
    { value: 'false', label: t('UnCheck') },
  ]

  return (
    <>
      <Select value={checkState} onChange={checkHandler} options={options} className="" />
    </>
  );
}

export default FilterCompleted;