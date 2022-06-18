<template>
  <div class="hello">
    <b-input v-model="resource.name" placeholder="resource name"/>
    <b-button @click="create"> Create a resource</b-button>
  </div>
</template>

<script>
import { overwriteFile, getSourceUrl } from "@inrupt/solid-client";

export default {
  name: 'HelloWorld',
  data(){
    return{
      resource : {}
    }
  },
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
          { contentType: 'application/json'/*, fetch: fetch*/ }    // mimetype if known, fetch from the authenticated session
        );
        console.log(`File saved at ${getSourceUrl(savedFile)}`);

      } catch (error) {
        console.error(error);
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
