<template>
  <div class="hello">
    <b-input v-model="resource.name" placeholder="resource name"/>
    <b-textarea v-model="resource.content" >Content</b-textarea>
    <b-button @click="create"> Create a resource</b-button>

    <b-button @click="read">Read</b-button>

    <!-- {{ resources }} -->

    <b-list-group>
      <b-list-group-item button v-for="r in resources" :key="r.url">

        <h4>  {{r.data.name}}</h4>
        {{r.data}}<br>
        <small><i>{{r.url}}</i></small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { overwriteFile, getSourceUrl, getSolidDataset, getThingAll, getFile } from "@inrupt/solid-client";

export default {
  name: 'HelloWorld',
  data(){
    return{
      resource : {},
      MY_POD_URL: "https://spoggy-test8.solidcommunity.net/public/gestion/",
      resources : []
    }
  },
  methods:{
    async create(){
      let d = Date.now()
      this.resource.created = d
      this.resource.updated = d
      console.log(this.resource)

      // const MY_POD_URL = "https://spoggy-test8.solidcommunity.net/public/gestion/";
      let targetFileURL = this.MY_POD_URL+d
      let data = JSON.stringify(this.resource)
      try {
        const savedFile = await overwriteFile(
          targetFileURL,                              // URL for the file.
          data,                                       // File
          { contentType: 'application/json'/*, fetch: fetch*/ }    // mimetype if known, fetch from the authenticated session
        );
        console.log(`File saved at ${getSourceUrl(savedFile)}`);

        this.resource = {}
        this.read()
      } catch (error) {
        console.error(error);
      }

    },
    async read(){
      console.log("read")
      this.resources = []
      const dataset = await getSolidDataset(
        this.MY_POD_URL,
        //  { fetch: fetch }  // fetch function from authenticated session
      );

      console.log(dataset)
      const resources = getThingAll( dataset );

      console.log("files", resources)

      let files = resources.filter(r => r.url != this.MY_POD_URL)

      console.log(files)
      let app = this

      for(let f of files){
        try {
          const file = await getFile(
            f.url,               // File in Pod to Read
            //  { fetch: fetch }       // fetch from authenticated session
          );
          console.log(file)

          const fileReader = new FileReader()
          fileReader.addEventListener('load', () => {
            let res = {file: f, result: fileReader.result}
            app.addResource(res)
          })
          fileReader.readAsText(file, "UTF-8")
        } catch (err) {
          console.log(err);
        }
      }
      this.resources.reverse()
    },
    addResource(r){
      console.log(r)
      this.resources.push({url: r.file.url, data: JSON.parse(r.result)})
      this.resources.sort((a, b) => {
        return b.data.updated - a.data.updated;
      })
    }
  },

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
