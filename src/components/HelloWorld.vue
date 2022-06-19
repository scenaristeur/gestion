<template>
  <b-container>
    <b-input v-model="resource.name" placeholder="resource name"/>
    <b-textarea
    v-model="resource.content"
    placeholder="Enter something..."
    rows="3"
    max-rows="6"
    >
  </b-textarea>
  <b-button @click="create"> Create a resource</b-button>

  <b-button @click="read">Read</b-button>

  <!-- {{ resources }} -->
  {{resources.length}} resources
  <b-list-group>
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
</b-list-group>
</b-container>
</template>

<script>
import { overwriteFile, /*saveFileInContainer,*/ getSourceUrl, getSolidDataset, getThingAll, getFile, deleteFile } from "@inrupt/solid-client";
import * as sc from '@inrupt/solid-client-authn-browser'

export default {
  name: 'HelloWorld',
  data(){
    return{
      resource : {},
      MY_POD_URL: "https://spoggy-test8.solidcommunity.net/public/gestion/",
      resources : []
    }
  },
  created(){
    this.read()
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
          { contentType: 'application/json', fetch: sc.fetch }    // mimetype if known, fetch from the authenticated session
        );
        console.log(`File saved at ${getSourceUrl(savedFile)}`);

        this.resource = {}

      } catch (error) {
        console.error(error);
      }

    },
    async read(){
      //console.log("read")
      this.resources = []
      const dataset = await getSolidDataset(
        this.MY_POD_URL,
        { fetch: sc.fetch }  // fetch function from authenticated session
      );

    //  console.log(dataset)
      const resources = getThingAll( dataset );

    //  console.log("files", resources)

      let files = resources.filter(r => r.url != this.MY_POD_URL)

    //  console.log(files)
      let app = this

      for(let f of files){
        try {
          const file = await getFile(
            f.url,               // File in Pod to Read
            { fetch: sc.fetch }       // fetch from authenticated session
          );
          //  console.log(file)

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
      //console.log(r)
      this.resources.push({url: r.file.url, data: JSON.parse(r.result)})
      this.resources.sort((a, b) => {
        return b.data.updated - a.data.updated;
      })
    },
    async init_trash(item){
    //  console.log(item)
      var remove = confirm("Are you sure you want to delete "+item.data.name+ " ?")
    //  console.log(remove);
      if (remove == true ){
        try {
          // Delete the specified file from the Pod.
          await deleteFile(
            item.url,  // File to delete
            { fetch: sc.fetch }                         // fetch function from authenticated session
          );
          console.log("Deleted:: "+item.url);
          this.read()
        } catch (err) {
          console.error(err);
        }
      }
    },
    // async createTest(){
    //   let d = Date.now()
    //   this.resource.created = d
    //   this.resource.updated = d
    //   console.log(this.resource)
    //   let data = JSON.stringify(this.resource)
    //   try {
    //     const savedFile = await saveFileInContainer(
    //       this.MY_POD_URL,           // Container URL
    //       data,                         // File
    //       { slug: d, contentType: "application/json", fetch: sc.fetch }
    //     );
    //     console.log(`File saved at ${getSourceUrl(savedFile)}`);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
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
