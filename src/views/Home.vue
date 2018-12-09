<template>
  <div class="home">
    <button @click="startGame">Start a new game</button>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    mounted() {
    },
    methods: {
      startGame() {
        this.$store.dispatch('startGame')
      }
    },
    components: {

    }
  }
</script>