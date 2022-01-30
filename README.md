# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

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

7. Init jest

- yarn add -D jest
- yarn add -D @types/jest
- add "node": "current" in  .babelrc  https://jestjs.io/docs/getting-started#using-babel

8. Init chromatic https://www.chromatic.com/

- add repository git hub
- yarn add -D chromatic 
- npx chromatic --project-token=aa696d5e18f8