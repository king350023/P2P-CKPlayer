
import { resolve } from 'path';

export const entry = './ckplayer/ckplayer.js';
export const output = {
    filename: 'ckplayer.min.js',
    path: resolve(__dirname, 'ckplayer')
};
