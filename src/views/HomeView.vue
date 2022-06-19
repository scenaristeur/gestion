<template>
  <b-container>
    <SolidLogin />
    <HelloWorld />
  </b-container>
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
