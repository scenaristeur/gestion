<template>
  <div class="hello">
    <b-input v-model="resource.name" placeholder="resource name"/>
    <b-button @click="create"> Create a resource</b-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      resource : {}
    }
  },
  methods:{
    create(){
      let d = Date.now()
      this.resource.created = d
      this.resource.updated = d
      console.log(this.resource)
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
