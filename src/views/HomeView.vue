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
