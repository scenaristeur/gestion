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
