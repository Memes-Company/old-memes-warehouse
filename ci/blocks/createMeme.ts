import uuid from 'uuid/v4';
import { PullRequest } from '../types';
const fs = require('fs');

import path from 'path';
export function createMeme(pullRequest: PullRequest, config: { dbpath: string }) {
  //TODO: extract translated string via reflection and generalize
  pullRequest.meme.id = uuid();
  const meme = {
    id: pullRequest.meme.id,
    tags: pullRequest.meme.tags,
  };
  const ruMeme = {
    title: pullRequest.meme.title['ru'],
    description: pullRequest.meme.description['ru'],
  };
  const enMeme = {
    title: pullRequest.meme.title['en'],
    description: pullRequest.meme.description['en'],
  };
  fs.writeFileSync(path.join(config.dbpath, 'memes', `${meme.id}.json`), JSON.stringify(meme, null, 2));
  fs.writeFileSync(path.join(config.dbpath, 'i18n', 'ru', `${meme.id}.json`), JSON.stringify(ruMeme, null, 2));
  fs.writeFileSync(path.join(config.dbpath, 'i18n', 'en', `${meme.id}.json`), JSON.stringify(enMeme, null, 2));
  return pullRequest;
}