// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { FC } from 'react';

interface TabProps {
  n: number;
  children: JSX.Element;
  label: string;
}

export const Tab: any = ({ n, children, label }: any) => {
  return <div>{children}</div>;
};

export default Tab;
