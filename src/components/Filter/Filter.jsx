import { setByNameFilter } from 'redux/contacts/filtersSlice';
import { selectFilterByName } from 'redux/contacts/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilterByName);
  const dispatch = useDispatch();

  const filterByName = e => {
    // console.log(e.currentTarget.value);
    dispatch(setByNameFilter(e.target.value));
  };
  return (
    <Label>
      <Input
        placeholder=" Contact Filter"
        type="text"
        value={filter}
        onChange={filterByName}
      ></Input>
    </Label>
  );
};

export default Filter;
