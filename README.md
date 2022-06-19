# gestion

## PART 1: Create a progressive web app with Vue2 and bootstrap-vue
### nodejs
### vue-cli
### vue create gestion
### verify working
-- openjs console / optionnal XHR & Requêtes
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

# PART 2 : The 'BASIC' Solid interaction

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

## add properties like description, content...

## read files
https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-data/
- getSolidDataset -> getThingAll -> filter Container -> foreach getFile ->fileReader -> AddRessource --> bootstrp list


## created

```  created(){
      this.read()
  },
```

## delete file
```
<b-list-group-item button v-for="r in resources" :key="r.url"
class="item list-group-item d-flex justify-content-between p-1">
<p class="p-0 m-0 flex-grow-1">
  <b>  {{r.data.name}}</b><br>
  {{r.data}}<br>
  <small><i>{{r.url}}</i></small>
</p>
<b-button size="sm" variant="outline-danger">
  <b-icon-trash @click.stop="init_trash(r)" variant="danger"></b-icon-trash>
</b-button>
</b-list-group-item>
```

# Part 3 : The 'AUTHENTICATED' Solid interaction
Now we will abort some more complexity , are you ready ?

## create login
- another vue JS component with two buttons login / logout , a way to select the provider
- inspired from https://github.com/scenaristeur/agent/blob/main/src/components/SolidLogin.vue
- with a specific vuex store module  this.$store.state.solid.session



```
npm install --save @inrupt/solid-client-authn-browser
```

src/views/HomeView.vue
```
<template>
  <div class="home">
    <SolidLogin />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    'SolidLogin': ()=>import('@/components/SolidLogin'),
  }
}
</script>
```

with plugin
- https://github.com/scenaristeur/agent/blob/94c321ac364954aa267efac68f77218de2d92fad/src/plugins/solid-plugin.js
```
import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$checkSolidSession = async function(){
      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then((info) => {
        if(info.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${info.webId}]`)
          store.commit('solid/setSession',info)
        }
      })
    }

    Vue.prototype.$login = async function(issuer){
      console.log("login", issuer)
      if (!sc.getDefaultSession().info.isLoggedIn) {
        await sc.login({
          oidcIssuer: issuer,
          redirectUrl: window.location.href,
          clientName: "Gestion"
        });
      }
    },

    Vue.prototype.$logout = async function(){
      let session = sc.getDefaultSession()
      await session.logout()
      store.commit('solid/setSession',null)
      store.commit('solid/setPod', null)
    }
    }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

```

src/main.js
```
import SolidPlugin from './plugins/solid-plugin';
Vue.use(SolidPlugin, {store: store});
```

- run $checkSolidSession on start
src/App.vue
```
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <small><i>0.0.1 - resource form</i></small>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.$checkSolidSession()
  }
}

</script>

```

## IMPORTANT ! update all queries with the sc.fetch


--> Now you can login with your webId

-- rechange sharing config and drag/drop Everyone to Viewers
-- logout (or even try to login with another webid )
-- test creating a new resources you should get a 401 authenticated -> you can't add
-- login back
-- you can create and delete resources



## + optionnal get pod infos  @inrupt/vocab-solid-common @inrupt/vocab-common-rdf


## write authenticated

## remove public write

## should add a caching system to only get resources that have changed
## could add Notification(ESS)/Websocket(NSS) to track change

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
