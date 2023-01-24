<template>
  <div>
    <span>
      <h1>Filter:</h1>
      <label>
        Search by Title:
        <input type="text" v-model="searchTitle" />
      </label>
    </span>

    <lesson-item
      v-for="(lesson, ind) in filter"
      :key="ind"
      :lesson="lesson"
      @LessonDelete="remove(ind)"
    />
  </div>
</template>

<script>
import LessonItem from "./LessonItem.vue";
export default {
  name: "LessonList",
  components: {
    LessonItem,
  },
  props: {
    lessons: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchTitle: null,
      searchHours: null,
      searchLecturer: null,
      searchRating: null,
    };
  },
  computed: {
    filter() {
      let list = this.lessons;
      if (this.searchTitle)
        list = this.lessons.filter((lesson) =>
          lesson.title.startsWith(this.searchTitle)
        );
      return list;
    },
  },
  methods: {
    remove: function (index) {
      this.lessons.splice(index, 1);
    },
  },
};
</script>

<style lang="css" scoped>
</style>