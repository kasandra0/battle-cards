<template>
  <div class="">
    <div class="row">
      <h3 class="col-6 name">{{role.name}}</h3>
      <h5 class="col-4 offset-2">Remaining Cards: {{role.remainingCards}}</h5>
    </div>
    <div v-if="isPlayer" class="row bg-transparent justify-content-center">
      <div v-for="card in role.hand" @click="setPlayerCard(card)" class="col-2 card m-1">
        <img :src="card.img" class="card-img" />
        <p class="name">{{card.name}}</p>
        <p>Attack: {{card.attack}}</p>
        <p>Health: {{card.health}}</p>
        <p>Defense: {{card.defense}}</p>
      </div>
    </div>
    <!-- OPPONENT'S HAND -->
    <div v-else class="row bg-transparent justify-content-center">
      <div v-for="card in role.hand" @click="setOpponentCard(card)" class="col-2 card m-1">
        <div v-if="card.visible" class="">
          <img :src="card.img" class="card-img" />
          <p class="name">{{card.name}}</p>
          <p>Attack: {{card.attack}}</p>
          <p>Health: {{card.health}}</p>
          <p>Defense: {{card.defense}}</p>
        </div>
        <div v-else class="card-back card-img">
          <h3 class="font-weight-bold my-5 py-5">Battle Cards</h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'hand',
    props: ['role', 'isPlayer'],
    mounted() {
    },
    data() {
      return {

      }
    },
    computed: {
      chosenCard() {

      }
    },
    methods: {
      setOpponentCard(card) {
        this.$store.dispatch('setOpponentCard', card)
      },
      setPlayerCard(card) {
        this.$store.dispatch('setPlayerCard', card)
      }
    }
  }

</script>

<style scoped>
  div>p {
    line-height: 1em;
    margin-bottom: 2px;
  }

  h3.name {
    font-weight: 900;
    font-family: 'Cinzel', serif;
  }

  p.name {
    margin-bottom: 1em;
    font-weight: 900;
  }
</style>