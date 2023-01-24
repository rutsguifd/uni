<template>
    <div class="main">
        <div class="divs">
            <label>
                Title: 
                <input type="text" v-model="title">
            </label>
        </div>
        <div class="divs">
            <label>
                Hours: 
                <input type="text" v-model="hours">
            </label>
        </div>
        <div class="divs">
            <label>
                Lecturer: 
                <input type="text" v-model="lecturer">
            </label>
        </div>
        <div class="divs">
            <label>
                Rating: 
                <input type="text" v-model="rating">
            </label>
        </div>
        <button class="btn" @click="addLesson">add lesson</button>
    </div>
</template>

<script>
    export default {
        name: 'AddLessonPage',
        data() {
            return {
                title:null,
                hours:null,
                lecturer:null,
                rating:null,
            }
        },
        methods:{
            addLesson(){
                this.$emit('addLesson',{
                    id:Date.now(),
                    title:this.title,
                    hours:this.hours,
                    lecturer:this.lecturer,
                    rating:this.rating,
                })
                this.title = null
                this.hours = null
                this.lecturer = null
                this.rating = null
            }
        },
    }
</script>

<style lang="css" scoped>
.main{
    text-align: center;
    margin: 15px;
    border: solid 2px grey;
    border-radius: 15px;
    background: goldenrod;
}
.divs{
    margin: 10px;
}
.btn{
    background: honeydew;
    border: solid 2px grey;
    border-radius: 5px;
    margin: 10px;
}
</style>