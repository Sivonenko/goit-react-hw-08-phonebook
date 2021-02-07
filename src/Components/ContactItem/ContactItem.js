import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button className={s.btn__list} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
