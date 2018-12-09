<template>
  <div class="">
    <h5 class="col-12">{{role.name}}</h5>
    <div v-if="isPlayer" class="row bg-primary justify-content-center">
      <div v-for="card in role.hand" @click="setPlayerCard(card)" class="col-2 card m-1">
        <img :src="card.img" class="card-img" />
        <p>{{card.name}}</p>
        <p>Attack: {{card.attack}}</p>
        <p>Health: {{card.health}}</p>
        <p>Defense: {{card.defense}}</p>
      </div>
    </div>
    <!-- OPPONENT'S HAND -->
    <div v-else class="row bg-warning justify-content-center">
      <div v-for="card in role.hand" @click="setOpponentCard(card)" class="col-2 card m-1">
        <div v-if="card.visible" class="card">
          <img :src="card.img" class="card-img" />
          <p>{{card.name}}</p>
          <p>Attack: {{card.attack}}</p>
          <p>Health: {{card.health}}</p>
          <p>Defense: {{card.defense}}</p>
        </div>
        <div v-else class="card">
          <img src='http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-ragnaros.png' class="card-back" />
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
  .card {}
</style>