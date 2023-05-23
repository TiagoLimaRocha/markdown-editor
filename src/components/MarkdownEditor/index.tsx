// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import React, { FC, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { MarkdownAPI } from 'src/api';

export const MarkdownEditor: FC<{ id: string }> = ({ id }) => {
  const [markdown, setMarkdown] = useState<string>('');

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMarkdown(event.target.value);
  };

  //  NOTE:  Fetch the previously stored markdown
  useEffect(() => {
    MarkdownAPI.get(id).then((response) => {
      console.log(response);
      setMarkdown(response);
    });
  }, []);

  //  NOTE:  Upsert the new markdown changes
  useEffect(() => {
    if (markdown !== '') {
      MarkdownAPI.upsert(id, markdown);
    }
  }, [markdown]);

  return (
    <div className={styles.app}>
      <div className={styles.editorCard}>
        <textarea
          className={styles.editor}
          value={markdown}
          onChange={handleMarkdownChange}
          name="editor"
          id="editor"
        ></textarea>
      </div>

      <div className={styles.previewCard}>
        <ReactMarkdown
          className={styles.reactMarkdown}
          children={markdown}
          remarkPlugins={[gfm]}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
