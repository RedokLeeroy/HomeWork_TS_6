import s from './Section.module.css';
import React, { ReactNode } from 'react';

export const Section = ({ title, children }: {title: string, children: ReactNode}):JSX.Element => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

