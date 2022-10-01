import s from './Contacts.module.css';
import React from 'react';
import { Item } from './Item';

export const Contacts = ({ contact, onDelete }: {contact:{name:string, id:string, phone:string}[],onDelete: (id:string)=>void}) => {
  return (
    <ul className={s.list}>
      {contact.map(({ id, name, phone }) => (
        <Item key={id} name={name} phone={phone} onDelete={onDelete} id={id} />
      ))}
    </ul>
  );
};
