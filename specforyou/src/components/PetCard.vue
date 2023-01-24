<template>
  <div class="card-box">
    <div class="card-like-button">
      <button  :disabled="!available">
        <img src="https://www.seekpng.com/png/small/869-8698119_grey-heart-clip-art-at-clker-gray-heart.png" alt="">
      </button>
    </div>
    <div class="card-img">
      <img :src="imgSrc" />
    </div>
    <div class="card-title">
      {{ title }}
    </div>
    <div v-show="available" class="card-price">
      {{ price }}
    </div>
    <div class="card-button">
      <button  v-show="available">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetCard",
  props: {
    imgSrc: {
      type: String,
      default:
        "https://res.cloudinary.com/woodland/image/upload/ar_1,c_crop/f_auto,h_800,q_auto,w_800/d_ni.png/v1/craftcuts_media/media/catalog/product/d/i/dimensional_animals_cats_cat_paw.jpg",
    },
    title: {
      type: String,
      default: ". . .",
    },
    price: {
      type: Number,
      default: 0,
    },
    available: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.card-box {
  border: 2px solid rgb(101, 144, 119);
  border-radius: 15px;
  margin: 9px;
  padding: 10px;
  background-color: white;
}
.card-like-button button{
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
    padding: 3px;
    cursor: pointer;
    background-color: white;
    border: 1px solid rgb(116, 116, 116);
    border-radius:5px ;
}

.card-like-button button:disabled {
  
  cursor: not-allowed;
  opacity: 0.8;
}
.card-like-button img{
    width: 100%;
}
.card-img img {
  width: 100px;
}
.card-button button {
  margin: 5px 0px;
  padding: 5px;
  width: 70px;
  border-radius: 9px;
  background-color: rgb(130, 185, 153);
  color: white;
  cursor: pointer;
  border: 2px solid rgb(101, 144, 119);
  display: block;
  margin-right: auto;
  margin-left: auto;

}
.card-button button:hover {
  background-color: rgb(115, 161, 134);
  border: 2px solid rgb(74, 103, 85);
}


</style>
