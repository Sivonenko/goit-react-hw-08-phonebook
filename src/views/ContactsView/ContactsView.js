import ContactsList from '../../Components/ContactsList/ContactsList';
import Form from '../../Components/Form/Form';
import Filter from '../../Components/Filter/Filter';
import s from './ContactsView.module.css';
import TotalNumber from '../../Components/TotalNumber/TotalNumber';
import Section from '../../Components/Section/Section';
import Container from '../../Components/Container/Container';

function ContactsView() {
  return (
    <Container>
      <div className={s.form_wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Filter />
          <TotalNumber />
          <ContactsList />
        </Section>
      </div>
    </Container>
  );
}

export default ContactsView;
