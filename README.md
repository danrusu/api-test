# api-test
API test POC using [mocha](https://mochajs.org/), [chai](https://www.chaijs.com/), [node-fetch ](https://www.npmjs.com/package/node-fetch) and [mochawesome reporter](https://www.npmjs.com/package/mochawesome)

### 1. Install 
```
npm install
```

### 2. Run Tests
```
npm test
```

### 3. Reports
- check the ./mochawesome-report folder

### 4. Npm package
```
npm info drusu-api-test
npm install drusu-api-test
npx mocha node_modules/drusu-api-test/src/tests --reporter mochawesome
```