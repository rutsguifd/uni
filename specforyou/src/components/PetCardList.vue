<template>
    
        <div class="list-container">
                <pet-card
                    v-for="item in petCardListData"
                    :key="item.id"
                    :img-src="item.imgSrc"
                    :title="item.title"
                    :price="item.price"
                    :available="item.available"
                />
            </div>
    
</template>

<script >
import PetCard from './PetCard.vue'
export default {
    name: 'PetCardList',
    components: {
    PetCard,
  },

  props: {
    petCardListData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.list-container{
  display: flex;
  justify-content: center;
}
</style>