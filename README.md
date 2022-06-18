# gestion

## nodejs
## vue-cli
## vue create gestion
## bootstrap-vue "bootstrap": "^4.5.3",
## nettoyage components/HelloWorld
- input + button -> resource.name
- data resource
- create method
- console.log(this.resource)

npm run build

## vue.config.js
- publicPath
```
const publicPath = process.env.NODE_ENV === 'production' ? '/gestion/' : '/' // <-- add this line

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath, // <-- add this line
  transpileDependencies: true
})
```
## src/registerServiceWorker.js
```
...
updated () {
  console.log('New content is available; please refresh.')
  alert('This app has been updated, please, close and reopen.') // <-- add this line
},
...
```

## create repo

```
…or push an existing repository from the command line

git remote add origin https://github.com/scenaristeur/gestion.git
git branch -M main
git push -u origin main

```


## build // create dist folder
`npm run build`

## comment dist in .gitignore
`# /dist # comment this line`

## add dist & commit
`git add dist -f && git commit -m "Initial dist subtree commit"`

## add all modifs and push first time
` git add .  && git commit -m "my modif" && git push && git subtree push --prefix dist origin gh-pages`


## configuring future push in package.json
add those scripts
`,
"git": "npm run build && git add . && git commit -m",
"postgit": "git push && git subtree push --prefix dist origin gh-pages"`





## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
