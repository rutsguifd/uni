<template>
  <div>
    <add-lesson-page @addLesson="addLesson" />
    <lesson-list :lessons="lessons" />
  </div>
</template>

<script>
import AddLessonPage from "@/pages/AddLessonPage.vue";
import LessonList from "@/components/LessonList.vue";
export default {
  name: "LessonFormPage",
  components: {
    LessonList,
    AddLessonPage,
  },
  data() {
    return {
      lessons: [
        {
          id: 1,
          title: "matan",
          hours: 2,
          lecturer: "Olexander",
          rating: 90,
        },
        {
          id: 2,
          title: "dyfky",
          hours: 3,
          lecturer: "Yana",
          rating: 67,
        },
        {
          id: 3,
          title: "client",
          hours: 1,
          lecturer: "Sergiy",
          rating: 86,
        },
      ],
    };
  },
  methods: {
      addLesson(arr) {
          this.lessons.push(arr)
      }
  }
};
</script>

<style lang="scss" scoped>
</style>