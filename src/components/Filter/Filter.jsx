import { setByNameFilter } from 'redux/contacts/filtersSlice';
import { selectFilterByName } from 'redux/contacts/selectors';

import { useDispatch, useSelector } from 'react-redux';


import { FormStyled, Input, Label } from 'components/Form/Form.styled';



const Filter = () => {
  const filter = useSelector(selectFilterByName);
  const dispatch = useDispatch();

  const filterByName = e => {
    // console.log(e.currentTarget.value);
    dispatch(setByNameFilter(e.target.value));
  };
  return (
    <FormStyled>
      <Label>
        <Input
          placeholder=" Contact Filter"
          type="text"
          value={filter}
          onChange={filterByName}
        ></Input>
      </Label>
    </FormStyled>
  );
};

export default Filter;
