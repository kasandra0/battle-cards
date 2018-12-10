<template>
  <div v-if="game.id" class="container-fluid">
    <hand :role="game.opponent" :isPlayer="false" class="opponent-hand justify-content-center" />
    <div class="row">
      <div v-if="!game.winner" class="col-12 game-play">
        <div @click="attack()" :class="{'attack-ready':ready()}" class="attack-button">
          <img src='../assets/punch-white.svg' height="70px">
        </div>
        <p>Opponent Card: {{opponentCard.name}}</p>
        <p>Player Card: {{playerCard.name}}</p>
      </div>
      <div v-else class="col-12 game-over">
        <h1>GAME OVER</h1>
        <h3>Winner: {{game.winner}}</h3>
        <button @click="goHome()" class="btn btn-light">Play Again</button>
      </div>
    </div>
    <hand :role="game.player" :isPlayer="true" class="player-hand" />
  </div>
</template>

<script>
  import hand from '@/components/hand.vue'


  export default {
    name: 'Game',
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)
    },
    data() {
      return {
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      playerCard() {
        return this.$store.state.playerCard
      },
      opponentCard() {
        return this.$store.state.opponentCard
      }

    },
    methods: {
      ready() {
        return this.playerCard.id && this.opponentCard.id
      },
      attack() {
        let payload = {
          gameId: this.game.id,
          playerCardId: this.playerCard.id,
          opponentCardId: this.opponentCard.id
        }
        this.$store.dispatch('attack', payload)
      },
      goHome() {
        this.$router.push({ name: 'home' })
      },
      newGame() {
        this.$store.dispatch('startGame')
      }
    },
    components: {
      hand
    }
  }

</script>

<style>
  body {
    background-color: rgb(111, 111, 111);
  }

  .attack-button {
    position: relative;
    height: 75px;
    margin: 10px;
    display: inline-block;
    width: 100px;
    object-fit: contain;
  }

  .attack-ready {
    border-style: solid;
    border-color: rgb(247, 213, 17);
    border-radius: 15px;
    background-color: rgb(245, 190, 10);
  }

  .card {
    background-color: rgb(199, 199, 199);
    border-style: solid;
    border-color: black;
    border-radius: 20px;
    min-height: 200px;
    max-height: 30vh;
    max-width: 175px;
  }

  .card-img {
    object-fit: contain;
    padding: 5px;
  }

  .card-back {
    object-fit: cover;
    height: 100%;
    width: 100%;
    font-family: 'Cinzel', serif;
    vertical-align: middle;
    background-color: rgb(240, 152, 21)
  }

  .game-play {
    padding-top: 20px;
  }

  .game-over {
    font-family: 'Josefin Slab', serif;
    position: relative;
    top: 0;
    padding: 10px;
  }

  .opponent-hand {
    top: 0;
    position: relative;
    max-height: 33vh;
  }

  .player-hand {
    bottom: 0;
    position: relative;
    max-height: 33vh;

  }
</style>