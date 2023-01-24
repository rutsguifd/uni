<template>
  <div>
    <pet-card-list :pet-card-list-data="listData" />
  </div>
</template>

<script>
import PetCardList from "@/components/PetCardList.vue";

export default {
  name: "App",

  components: {
    PetCardList,
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc: "https://pbs.twimg.com/media/EsCC6wjXYAMULV-.jpg",
          title: "Sea otter",
          price: 60000,
          available: true
        },
        {
          id: 2,
          imgSrc:
            "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/153044-left-1",
          title: "Ferret",
          price: 5000,
          available: true
        },
        {
          id: 3,
          imgSrc:
            "https://play-lh.googleusercontent.com/oOvvuSCGFFG67UwsySQQprfsyNQfhjIyuouxdzwwCi0RCVs7_Rhdtw10B2ZTQ26Te_Yg",
          title: "Hedgehog",
          price: 2000,
          available: false
        },
        {
          id: 4,
          imgSrc:
            "https://bloximages.newyork1.vip.townnews.com/trinidadexpress.com/content/tncms/assets/v3/editorial/0/1b/01b994fa-df90-11e9-88d2-27a969c6f5dd/5d8b5d97f1596.image.jpg?crop=683%2C683%2C170%2C0&resize=1200%2C1200&order=crop%2Cresize",
          title: "Capybara",
          price: 70000,
          available: false
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
