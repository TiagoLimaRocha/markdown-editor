import fs from 'fs';
import { app } from '../../plugins/express';
import { getPathToMarkdown } from 'backend/src/util';

export function upsertMarkdown() {
  app.put('/markdown', (req, res) => {
    try {
      const { data } = req?.body || {};
      const pathToMarkdown = getPathToMarkdown();

      if (!data) {
        res.status(400).json({ error: 'Markdown data not found' });
      }

      if (fs.existsSync(pathToMarkdown)) {
        fs.writeFileSync(pathToMarkdown, data, 'utf8');
        res.status(201).json({ success: true, markdown: data });
      } else {
        res
          .status(404)
          .json({ success: false, error: 'Markdown file not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  });
}
