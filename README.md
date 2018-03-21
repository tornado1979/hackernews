This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents
- [About](#about)
- [Workflow](#workflow)
- [Technical Workflow](#technical-workflow)
- [Folder Structure](#folder-structure)
- [Run local](#run-local)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Todo](#todo)


## About
* It is a SPA web app that uses https://hn.algolia.com/api API to fetch news to the client, and show them to the end user.
* This API gives only 50 articles on each request, based on this param: &`hitsPerPage=50`.
* Functionalities: 
- sortorder asc or desc based on article title or article date
- realtime searchbox that updates state
- reload button that refreshes the page with new news
- 'more button' on the bottom of the page, for fetching the articles on 10's
- a progress loader is displayed when news loading
- the user clicks anywhere on the artcle block and he is redirected on the article's url

* It is written in reactjs + reduxjs and some other dependencies:
- redux-thunk
- prop-types
- reselect
- momentjs
- lodash
- sass
- webpack
- bootstrap 4
- jquery
- popper

## Workflow

* Init: a request to the API_ENDPOINT: http://hn.algolia.com/api/v1/search?tags=front_page, is done to fetch the news data.
* The data are consumed and the store is updated with the news articles.
* The state looks like this:
  ```
  {
    config:{articlesChunk: 10},
    news: {isFetching: true},
    search: {searchText: ""},
    sort: {sortOrder: "none", sortType: "none"},
  }
  ```
* On the top of the page, there is a elect box that the user can chose the 
order type (Date,Title) and the sort order (Ascending,Descending).
* The initial displayed articles are 7 and the news are displayed in chunks of 7 articles, each time the user clicks 'load more news..' button.

## Technical Workflow
1. The app loads and the store is created and initialised.
2. all the actions follow this procedure:
 action -> actionCreator -> reducer -> update the state <- selector gets state data -> update the component
2. for style i use bootstrap4 and sass. I overrided the default breakpoins to create these breakpoints:
```
  $grid-breakpoints: (
    xs: 0,
    sm: 320px,
    md: 510px,
    lg: 780px,
    xl: 1000px
  );
```
  The scss files are translated to pute css files with the help of webpack:
  ```
  {
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "sass-loader" // compiles Sass to CSS
    }]
  },
  ```
## Folder structure

I have run `npm run eject`, in order to have better control over, 
webpack, eslint etc.

The structure of the project is this:
```
news/
  README.md
  build/
    minimized code+styles
  config/
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  scripts/
    build.js
    start.js
    test.js
  src/
    modules/
      home/
        actionCreators/
          index.js
        actions/
          index.js
        css/
          index.scss
        reducers/
          news.js
        selectors/
          index.js
        index.js
      reducers/
        index.js
      App.js
      App.css
      App.test.js
      index.css
      index.js
      logo.svg
      registerServiceWorker.js
      store.js
    packagejson
    README.md
```

## Run local

In order to run localhost you shoul:

* download/clone the repo to a folder
* execute npm install to install all the dependencies
* npm run start
* open your browser on http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Todo

* unit tests on actionCreators, reducers, selectors
* add more pages with React Router
