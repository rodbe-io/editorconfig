import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptPath = dirname(fileURLToPath(import.meta.url));
const editorconfigPkg = join(scriptPath, '../');
const shareableEditorconfigPath = join(editorconfigPkg, '.editorconfig');
const copyDestination = join(process.cwd(), '.editorconfig');

console.log(11, shareableEditorconfigPath, copyDestination);

try {
  copyFileSync(shareableEditorconfigPath, copyDestination);
  console.log('✅ .editorconfig copiado desde @rodbe/editorconfig');
} catch (error) {
  console.error('❌ Error copiando .editorconfig:', error);
}
