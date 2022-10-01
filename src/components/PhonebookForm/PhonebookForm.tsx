import React, { useState } from 'react';
import { FormSubmit } from './FormSubmit';
import { NameInput } from './NameInput';
import { PhoneInput } from './PhoneInput';
import { addAction } from '../../redux/ItemsActions';
import { addItemSelector } from '../../redux/items-selector';
import { useAppDispatch, useAppSelector } from '../../hooks';

//---------------------------------------------------------------------------------//

export const PhonebookForm = () => {
  const [nameEl, setNameEl] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(addItemSelector);

  const handSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isHere = contacts.some(({ name }: {name:string}) => nameEl === name);
    if (isHere) {
      alert(`Name already in contacts`);
      return;
    } else {
      dispatch(addAction(nameEl, phone));
      setNameEl('');
      setPhone('');
    }
  };

  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setNameEl(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handSubmit}>
      <NameInput value={nameEl} name="name" func={handlerInput}></NameInput>
      <PhoneInput value={phone} name="phone" func={handlerInput}></PhoneInput>
      <FormSubmit title="Add contact"></FormSubmit>
    </form>
  );
};
