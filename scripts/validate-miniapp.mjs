import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
    'project.config.json',
    'package.json',
    'miniprogram/app.js',
    'miniprogram/app.json',
    'miniprogram/app.wxss',
    'miniprogram/sitemap.json'
];

const readJson = (filePath) => {
    const fullPath = path.join(root, filePath);
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
};

const assertFile = (filePath) => {
    const fullPath = path.join(root, filePath);
    if (!fs.existsSync(fullPath)) {
        throw new Error(`Missing required file: ${filePath}`);
    }
};

for (const file of requiredFiles) {
    assertFile(file);
}

const appConfig = readJson('miniprogram/app.json');
if (!Array.isArray(appConfig.pages) || appConfig.pages.length === 0) {
    throw new Error('miniprogram/app.json must define pages');
}

for (const page of appConfig.pages) {
    for (const ext of ['js', 'json', 'wxml', 'wxss']) {
        assertFile(`miniprogram/${page}.${ext}`);
    }

    const wxmlPath = path.join(root, `miniprogram/${page}.wxml`);
    const wxml = fs.readFileSync(wxmlPath, 'utf8');
    if (/bind\w+="\{\{/.test(wxml)) {
        throw new Error(`Dynamic event binding is not allowed in ${page}.wxml`);
    }
}

if (!appConfig.window?.navigationBarTitleText?.includes('珂珂手作')) {
    throw new Error('navigationBarTitleText should use the demo brand name');
}

const tabPages = new Set((appConfig.tabBar?.list || []).map((item) => `/${item.pagePath}`));
for (const page of appConfig.pages) {
    const jsPath = path.join(root, `miniprogram/${page}.js`);
    const js = fs.readFileSync(jsPath, 'utf8');
    const navigateToUrls = [...js.matchAll(/wx\.navigateTo\(\s*\{\s*url:\s*['"]([^'"]+)['"]/gs)].map((match) => match[1]);
    for (const tabPage of tabPages) {
        if (navigateToUrls.includes(tabPage)) {
            throw new Error(`Use wx.switchTab instead of wx.navigateTo for tab page ${tabPage}`);
        }
    }
}

console.log(`Validated ${appConfig.pages.length} miniapp pages.`);
