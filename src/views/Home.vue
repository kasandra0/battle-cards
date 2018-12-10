<template>
  <div class="home row">
    <h1 class="title col-12">Battle Cards</h1>
    <div class="col-12">
      <img src='../assets/swords.svg' height="400px">
    </div>
    <div class="col-12">
      <form @submit.prevent="startGame()">
        <input type="text" name="player-name" v-model="gameConfig.playerName" placeholder="Enter Player Name"><br>
        <button type="submit">Start a new game</button>
      </form>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'home',
    data() {
      return {
        gameConfig: {
          playerName: ''
        }
      }
    },
    mounted() {
    },
    methods: {
      startGame() {
        this.$store.dispatch('startGame', this.gameConfig)
      }
    },
    components: {

    }
  }
</script>
<style scoped>
  h1.title {
    font-family: 'Cinzel', serif;
    font-size: 5rem;
    font-weight: 600;
  }

  form {
    display: inline-block;
    padding: 10px;
  }

  form>input {
    margin: 10px;
  }
</style>