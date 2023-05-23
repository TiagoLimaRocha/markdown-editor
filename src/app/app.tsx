// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { FC, useState, useEffect } from 'react';
import { MarkdownEditor, Tab, Tabs } from 'src/components';

export const App: FC = () => {
  const [tabId, setTabId] = useState<string>(
    window.localStorage.getItem('tabId') || ''
  );

  useEffect(() => {
    const id = window.localStorage.getItem('tabId') || '';
    setTabId(id);
  }, []);

  return (
    <>
      <Tabs>
        {[...Array(3).keys()].map((n: number) => (
          <Tab n={n} label={`Tab ${n}`}>
            Content of Tab {n}
          </Tab>
        ))}
      </Tabs>

      <MarkdownEditor id={tabId} />
    </>
  );
};

export default App;
