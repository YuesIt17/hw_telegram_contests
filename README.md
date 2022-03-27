# Project telegram contest chart

Run build: 
  - yarn build

Run app: 
  - yarn start

Run test:
  - yarn test

Run storybook: 
  - yarn storybook

Run lint: 
  - yarn lint

Init packages:

1. Install webpack https://webpack.js.org/guides/installation/

- npm install --save-dev webpack
- npm install --save-dev webpack-cli

2. Init config https://webpack.js.org/api/cli/#init

- npx webpack init

? Which of the following JS solutions do you want to use? ES6
? Do you want to use webpack-dev-server? Yes
? Do you want to simplify the creation of HTML files for your bundle? Yes
? Do you want to add PWA support? No
? Which of the following CSS solutions do you want to use? none
? Do you like to install prettier to format generated configuration? Yes
? Pick a package manager: yarn

3. Init babel preset-react and types
https://babeljs.io/docs/en/babel-preset-react
https://babeljs.io/docs/en/babel-preset-typescript
https://ru.reactjs.org/docs/static-type-checking.html

- yarn add -D @babel/preset-react @babel/preset-typescript @types/react @types/react-dom
- add @babel/preset-typescript, @babel/preset-react in file .babelrc 

4. Init react https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658

- yarn add react react-dom

5. Init ts
- yarn add -D typescript 
- npx tsc --init 
- settings jsx in tsconfig.json https://www.typescriptlang.org/docs/handbook/jsx.html

6. Init storybook https://storybook.js.org/docs/react/get-started/install

- npx sb init

7. Init testing library

- yarn add -D jest
- yarn add -D @types/jest
- add "node": "current" in  .babelrc  https://jestjs.io/docs/getting-started#using-babel
- yarn add -D @testing-library/react
- yarn add -D @testing-library/jest-dom
- yarn add -D react-test-renderer
- yarn add -D @types/react-test-renderer

8. Init chromatic https://www.chromatic.com/

- add repository git hub
- yarn add -D chromatic 
- npx chromatic --project-token=aa696d5e18f8

9. Init eslint and prettier

- yarn add -D eslint
- yarn add -D eslint-plugin-prettier
- yarn add --D --exact prettier
- yarn add --D husky lint-staged
- yarn add -D @typescript-eslint/parser
- yarn add -D @typescript-eslint/eslint-plugin
- yarn create @eslint/config
- yarn add -D eslint-plugin-react
- echo {}> .prettierrc.json - if there is a problem with encoding https://github.com/prettier/prettier/issues/8815