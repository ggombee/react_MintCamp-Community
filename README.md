### 1. Summary

## 1. Purpose of this project

- Make function of basic commnuity Web service,,,
- Develop community with Javascript, CRA without state management library (redux, mobx, recoli,,) aiming to strengthen the basics of React.
- Thinking about the extensibility of the code in developing.
- Inventing a efificent way to seperate components according to design.
- Learn about the folder structure and build my own folder structure.
- Think about why React use Atomic Design.


## 2.  About this Toy-project

- title : "MintCamp" 
- base : create-react-app
- style : styled-component

### 2. Settings

## 1. Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## 2. Structure of Folder

> src
> <br>
>
> > components 
> > <br>
> > containers 
> > <br>
> > pages
> > <br>
> > routers
> > <br>
> > utils
> > <br>
> > styles
> > 
> > > assets
> > > <br>
> > > ui

1. components (presentation components)

- Smallest unit of functional groups such as multiple combinations of ui and charts below the list.

2. containers (container components)

- Collections of components (1:N) transfers data to the components and performs actions accoring to user actions.

3. pages 

- Responsible for one page.
- Basically responds 1:1 with Helmet information, server data initially requested from the server, and container.

4. routers

- Page to route SPA, Using 'react-router-dom'.
- Base : RootRouter

5. utils (common utility)

- A file of functions that are commonly used including custom hooks.
- Include axios module setting file, that makes a request ro the server. (ex)api.ts or setupAxios.js)
- Include commafy, lpad, commondate, history function file.

> api call sample
```javascript
import api from 'src/utils/api';

api
.get('url', {
  data: 'value',
})
.then(response => {})
.catch(e => {});
  ```

6. styles

- assets : A file containing images and fonts file..
- ui : smallest unit of ui (ex)Button.js)


## 3. Setting file

`.env` 
`.prettierrc.json`
`.eslintrc.json`
`package.json`
`jsconfig.json`


## 4. DO NOT COMMIT FOLDER & FILES!!

- .vscode
- .idea
- .eslintcache
- node_modules
- build
- pakage-lock.json
- yarn.lock
- yarn-error.log


