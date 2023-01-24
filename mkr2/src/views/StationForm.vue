<template>
  <div>
    <Header />
    <AddTrip />
    <div class="search">
      <label>
        Search by Start Point:
        <input type="text" v-model="search" />
        <button @click="srch">search</button>
      </label>
    </div>
    <div class="sort">
      Sort:
      <select v-model="select">
        <option>lower price first</option>
        <option>higher price first</option>
      </select>
      <button @click="sortInfo">Sort</button>
    </div>
    <trip-card v-for="(trip, ind) in AllTrips" :key="ind" :trip="trip" />
    <hr />
    <favorite-trips
      v-for="trip in AllFavoriteTrips"
      :key="trip.id"
      :trip="trip"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import FavoriteTrips from "../components/FavoriteTrips.vue";
import AddTrip from "../components/AddTrip.vue";
import Header from "../components/Header.vue";
import TripCard from "../components/TripCard.vue";
export default {
  name: "StationForm",
  components: {
    TripCard,
    Header,
    AddTrip,
    FavoriteTrips,
  },
  data() {
    return {
      search: "",
      select: "",
    };
  },
  computed: {
    ...mapGetters(["AllFavoriteTrips"]),
    ...mapGetters(["AllTrips"]),
  },
  methods: {
    ...mapActions(["filter"]),
    ...mapMutations(["searchTitle"]),
    ...mapMutations(["sortValue"]),
    srch() {
      this.searchTitle(this.search);
      this.filter();
    },
    ...mapActions(["sortIt"]),
    sortInfo() {
      this.sortValue(this.select)
      this.sortIt()
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
.search {
  margin: 10px 20px;
  padding: 10px 10px;
  border: 3px dashed pink;
  border-radius: 10px;
  button {
    margin-left: 10px;
  }
}
.sort {
  margin: 10px 20px;
  padding: 10px 10px;
  border: 3px dashed pink;
  border-radius: 10px;
  button{
      margin-left: 10px;
  }
}
</style>