import { useDispatch } from 'react-redux';
import { findName } from 'redux/filterSlice';
import { StyledInput, StyledText } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    const filterName = evt.currentTarget.value;
    dispatch(findName(filterName));
  };

  return (
    <div>
      <StyledText>Find contacts by name:</StyledText>
      <StyledInput type="text" name="filter" onChange={onChange} />
    </div>
  );
};
