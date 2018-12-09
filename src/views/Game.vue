<template>
  <div v-if="game.id" class="container-fluid bg-light">
    <hand :role="game.opponent" :isPlayer="false" />
    <div class="row">
      <div v-if="!game.winner" class="col-12">
        <button :disabled="!ready()" @click="attack()">Attack</button>
        <p>Opponent Card: {{opponentCard.name}}</p>
        <p>Player Card: {{playerCard.name}}</p>
      </div>
      <div v-else class="col-12">
        Winner: {{game.winner}}
        <button @click="newGame()">Play Again</button>
      </div>
    </div>
    <hand :role="game.player" :isPlayer="true" />
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
  .card {
    background-color: rgb(199, 199, 199);
    border-style: solid;
    border-color: black;
    border-radius: 20px;
    min-height: 200px;
  }

  .card-img {
    object-fit: contain;
  }

  .card-back {
    object-fit: contain;
    max-height: 287px
  }
</style>