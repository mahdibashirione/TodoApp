import Select from 'react-select';

const FilterCompleted = ({ checkHandler, checkState }) => {


  const options = [
    { value: '', label: 'All' },
    { value: 'true', label: 'Check' },
    { value: 'false', label: 'UnCheck' },
  ]

  return (
    <>
      <Select value={checkState} onChange={checkHandler} options={options} className="" />
    </>
  );
}

export default FilterCompleted;