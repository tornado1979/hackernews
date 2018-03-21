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
* I used the `create-reac-app` biolerplate to develop this project, because it has many contributors maintening it/updating it, they release new version quite often, its structure is simple as it has only one page just to show that react is up and running, and the dev is free to add as many dependencies as he needs for the `to-be` project.

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
* On the top of the page, there is a select box that the user can chose the 
order type (Date,Title) and the sort order (Ascending,Descending).
* The initial displayed articles are 10 and the news are displayed in chunks of 10 articles, each time the user clicks 'load more news..' button.

## Technical Workflow
1. The app loads and the store is created and initialised.
2. All the actions follow this procedure:
 action -> actionCreator -> reducer -> update the state <- selector gets state data -> update the component
2. For style i use bootstrap4 and sass. As for the webpack to convert the scss custom files to css, i added this snipet, on the webpack config file.
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
app/
  config/ <!--webpack config files-->
  node_modules/ <!--dependencies-->
  public/
  scripts/
  src/  <!-- main project code -->
  components/
    actionCreators/
      index.js
    actions/
      index.js
    reducers/
      index.js
    selectors/
      index.js
    customButton.js <!-- button component for 'load more' -->
    loader.js <!-- loader component -->
    reload.js <!-- button for reload the news -->
    root.js <!-- root component that keeps the app routes-->
    search.js <!-- search componend-->
  middlewares/
    logger.js <!-- logger middleware forwatching the actions & state-->
  modules/
    home/
      actionCreators/
        index.js
      action/
        index.js
      css/
        index.scss
      reducers/
        news.js
      selectors/
        index.js
      index.js
      reducers/
        index.js <!-- here i use the combineReducers -->
    constants.js <!-- constants like the api endpoint-->
    index.js
    store.js
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
* the unit tests are missing, i have to add them.
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
* maybe on the progress loader i need to add a modal div so to prevent the user from 
writing and making requests to the server simultaneously.
