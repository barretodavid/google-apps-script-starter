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
yarn install
```

4. Login to your Google account

```
yarn login
```

5. Build the code

```
yarn build
```

6. Push the code to Drive

```
yarn deploy
```

For continuous development use:

```
yarn dev
```
