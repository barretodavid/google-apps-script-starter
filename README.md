# Google Apps Script Starter

Starter kit to develop bound scripts on Google Sheets using Google Apps Script with Typescript.

The code on this project is explained in detail in the following [blog post](https://david-barreto.com/google-app-script-local-development-tutorial/).

Instructions to use this starter kit for your own Google Spreadsheet:

1. Download the starter

```
git clone --depth=1 git@github.com:barretodavid/google-apps-script-starter.git your-project-name
```

2. Remove git history and create your own

```
cd your-project-name
rm -rf .git
git init
```

3. Install dependencies

```
npm install
```

4. Login to your Google account

```
npm run login
```

5. Build the code

```
npm run build
```

6. Update `scriptId` with your own

**.clasp.json**

```js
{
  "scriptId": "put-your-script-id-here",
  "rootDir": "dist/"
}
```

7. Push the code to Drive

```
npm run deploy
```

For continuous development use:

```
npm run dev
```

To run tests

```
npm run test
```
