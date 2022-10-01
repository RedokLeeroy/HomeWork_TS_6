
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { FindByName } from './FindByName/FindByName';
import { addItemSelector, filterItemSelector } from '../redux/items-selector';
import { deleteAction, filterAction } from '../redux/ItemsActions';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';

export const App = ():JSX.Element => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(addItemSelector);
  const filteritem = useAppSelector(filterItemSelector);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const { value } = event.target as EventTarget & {value: string};
    dispatch(filterAction(value));
  };

  const handleFilters = ():{} => {
    return contacts.filter((contact: { name: string; }) =>
      contact.name.toLowerCase().includes(filteritem.toLowerCase())
    );
  };

  const handleDelete = (id: string): void => {
    dispatch(deleteAction(id));
  };

  return (
    <>
      <Section title="phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <FindByName value={filteritem} onChange={handleChange} />
        <Contacts contact={handleFilters()} onDelete={handleDelete} />
      </Section>
    </>
  );
};
