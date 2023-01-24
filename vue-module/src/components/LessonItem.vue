<template>
    <div class="item">
        <span class="line" >Title: {{lesson.title}}</span>
        <span class="line" >Hours: {{lesson.hours}}</span>
        <span class="line" >Lecturer: {{lesson.lecturer}}</span>
        <span class="line" >Rating: {{lesson.rating}}</span>
        <button class="btn" @click="DeleteLesson">delete</button>
    </div>
</template>

<script>
    export default {
        name: 'LessonItem',
        data() {
            return {
                ifOn: true
            }
        },
        props: {
            lesson: {
            type: Object,
            default: () =>({}),
            required: true,
            }
        },
        methods: {
            DeleteLesson: function(index){
            this.$emit('LessonDelete', index);
        }
        }
    }
</script>

<style lang="css" scoped>
.item{
    margin: 10px;
    border: solid 2px grey;
    border-radius: 15px;
    text-align: center;
    background: goldenrod;
}
.line{
    margin: 10px;
}
.btn{
    background: honeydew;
    border: solid 2px grey;
    border-radius: 5px;
}
</style>