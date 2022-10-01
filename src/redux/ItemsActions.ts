import { ActionCreator, createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addAction = createAction('add', (name:string, phone:string) => ({
  payload: {
    name,
    phone,
    id: nanoid(),
  },
}));

export const deleteAction = createAction<string>('delete');
export const filterAction = createAction<string>('filter');
