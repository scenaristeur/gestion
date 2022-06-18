# gestion

## First : Create a progressive web app with Vue2 and bootstrap-vue
### nodejs
### vue-cli
### vue create gestion
### bootstrap-vue "bootstrap": "^4.5.3",
### nettoyage components/HelloWorld
- input + button -> resource.name
- data resource
- create method
- console.log(this.resource)

npm run build

### vue.config.js
- publicPath
```
const publicPath = process.env.NODE_ENV === 'production' ? '/gestion/' : '/' // <-- add this line

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath, // <-- add this line
  transpileDependencies: true
})
```
### src/registerServiceWorker.js
```
...
updated () {
  console.log('New content is available; please refresh.')
  alert('This app has been updated, please, close and reopen.') // <-- add this line
},
...
```

### create repo

```
…or push an existing repository from the command line

git remote add origin https://github.com/scenaristeur/gestion.git
git branch -M main
git push -u origin main

```


### build // create dist folder
`npm run build`

### comment dist in .gitignore
`# /dist # comment this line`

### add dist & commit
`git add dist -f && git commit -m "Initial dist subtree commit"`

### add all modifs and push first time
` git add .  && git commit -m "my modif" && git push && git subtree push --prefix dist origin gh-pages`


### configuring future push in package.json
add those scripts
`,
"git": "npm run build && git add . && git commit -m",
"postgit": "git push && git subtree push --prefix dist origin gh-pages"`


### goto settings/pages and complete repo page

open https://scenaristeur.github.io/gestion/

### optionnal add version on App.vue

### next commits :
`npm run git -- "my commit"`


### your app can be installed on smartphones ;-)

______________________________________________________________________________

# The Solid Part

## create a public write folder on one of your POD

https://spoggy-test8.solidcommunity.net/public/gestion/

## test write to that folder
`npm install --save @inrupt/solid-client`
- solid-client
- https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-files/

```
import { overwriteFile, getSourceUrl } from "@inrupt/solid-client";
...
methods:{
  async create(){
    let d = Date.now()
    this.resource.created = d
    this.resource.updated = d
    console.log(this.resource)

    const MY_POD_URL = "https://spoggy-test8.solidcommunity.net/public/gestion/";
    let targetFileURL = MY_POD_URL+d
    let data = JSON.stringify(this.resource)
    try {
      const savedFile = await overwriteFile(
        targetFileURL,                              // URL for the file.
        data,                                       // File
        { contentType: 'application/json'/*, fetch: fetch*/ }    // mimetype if known
      );
      console.log(`File saved at ${getSourceUrl(savedFile)}`);

    } catch (error) {
      console.error(error);
    }

  }
}

```

## read files
https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-data/
- getSolidDataset -> getThingAll -> filter Container -> foreach getFile ->fileReader -> AddRessource --> bootstrp list


## create login

## write authenticated

## remove public write

_____________________________________________

## The Group part


__________________________________

## Developpement / Project setup
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
