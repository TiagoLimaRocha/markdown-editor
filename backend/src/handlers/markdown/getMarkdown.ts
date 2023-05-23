import fs from 'fs';
import { app } from '../../plugins/express';
import { getPathToMarkdown } from 'backend/src/util';

export function getMarkdown() {
  app.get('/markdown/:id', (req, res) => {
    try {
      const pathToMarkdown = getPathToMarkdown();

      if (fs.existsSync(pathToMarkdown)) {
        const data = fs.readFileSync(pathToMarkdown, 'utf8');
        res.status(200).json({ success: true, markdown: data });
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
