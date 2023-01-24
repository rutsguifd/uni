<template>
  <div class="add">
    <div>
      <label>
        Start Point:
        <input type="text" v-model="tripStart" />
      </label>
    </div>
    <div>
      <label>
        End Point:
        <input type="text" v-model="tripEnd" />
      </label>
    </div>
    <div>
      <label>
        Duration:
        <input type="text" v-model="tripDuration" />
      </label>
    </div>
    <div>
      <label>
        Price:
        <input type="text" v-model="tripPrice" />
      </label>
    </div>
    <div>
      <label>
        Vehicle:
        <input type="text" v-model="vehicle" />
      </label>
    </div>
    <button @click="add">Add Trip</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tripStart: "",
      tripEnd: "",
      tripDuration: "",
      tripPrice: "",
      vehicle: "",
    };
  },
  methods: {
    ...mapMutations(["addTrip"]),
    add() {
      this.addTrip({
        id: Date.now(),
        start: this.tripStart,
        end: this.tripEnd,
        dur: this.tripDuration,
        price: this.tripPrice,
        veh: this.vehicle,
      }),
        (this.tripStart = "");
      this.tripEnd = "";
      this.tripDuration = "";
      this.tripPrice = "";
      this.vehicle = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
    border: 3px dashed pink;
    border-radius: 10px;
    margin: 10px 20px;
    text-align: center;
  div {
      border: 3px dashed pink;
    border-radius: 10px;
    margin: 10px 20px;
  }
}
</style>