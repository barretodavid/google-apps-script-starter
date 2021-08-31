# Google Apps Script Starter

Starter kit to develop Google Apps Script projects.

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

6. Push the code to Drive

```
npm run deploy
```

For continuous development use:

```
npm run dev
```
