import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { contactsState, filterState } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(contactsState);
  const filter = useSelector(filterState);
  console.log(filter);
  const visibleItems = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleItems.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
