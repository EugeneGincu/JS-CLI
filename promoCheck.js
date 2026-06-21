import { readFile, writeFile } from 'node:fs/promises';
import { fetchURL } from './getURLS.js';
import { JSDOM } from 'jsdom';

const file = readFile('promoCheck.txt','utf-8')
				.then(body => JSON.parse(body))
				.catch(e => console.log(e));
				
Promise.resolve(file).then(val => console.log(val));