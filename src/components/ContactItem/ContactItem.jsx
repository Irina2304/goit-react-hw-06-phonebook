import { StyledItem, StyledBtm, StyledText } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClick = evt => {
    dispatch(delContact(evt.currentTarget.name));
  };

  return (
    <StyledItem>
      <StyledText>
        {item.name}: {item.number}
      </StyledText>
      <StyledBtm type="button" name={item.id} onClick={onClick}>
        delete
      </StyledBtm>
    </StyledItem>
  );
};
