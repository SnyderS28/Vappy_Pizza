import fs from 'fs/promises';
import path from 'path';

export async function loadPrompt() {
  const filePath = path.resolve('config/systemPrompt.txt');
  return await fs.readFile(filePath, 'utf-8');
}