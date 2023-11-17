import { rimraf, rimrafSync, native, nativeSync } from 'rimraf'
import { exec, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

//step 1: delete existing builds from the dist folder
rimrafSync('./dist/*', {'glob':true})

// Step 2: Compile the ESM build using the command: "tsc -p tsconfig.json"
try {
  console.log('Compiling ESM build...');
  execSync('tsc -p tsconfig-mjs.json', { stdio: 'inherit' });
  console.log('ESM build compilation complete.');
} catch (error) {
  console.error('Error compiling ESM build:', error.message);
  process.exit(1);
}

// Step 3: Compile the CJS build using the command: "tsc -p tsconfig-cjs.json"
try {
  console.log('Compiling CJS build...');
  execSync('tsc -p tsconfig-cjs.json', { stdio: 'inherit' });
  console.log('CJS build compilation complete.');
} catch (error) {
  console.error('Error compiling CJS build:', error.message);
  process.exit(1);
}

// Step 4: Create ./dist/cjs/package.json with "type": "commonjs"
const cjsPackageJsonPath = './dist/cjs/package.json';
const cjsPackageJsonContent = { type: 'commonjs' };
fs.writeFileSync(cjsPackageJsonPath, JSON.stringify(cjsPackageJsonContent, null, 2));
console.log('Created CJS package.json');

// Step 5: Create ./dist/mjs/package.json with "type": "module"
const esmPackageJsonPath = './dist/mjs/package.json';
const esmPackageJsonContent = { type: 'module' };
fs.writeFileSync(esmPackageJsonPath, JSON.stringify(esmPackageJsonContent, null, 2));
console.log('Created ESM package.json');
