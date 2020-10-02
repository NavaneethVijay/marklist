<template>
  <div
    v-if="todo"
    :class="{ active: todo.done, 'shadow-none': todo.done }"
    class="w-full md:w-1/3 list-complete-item mx-auto mb-4 bg-white rounded-lg py-2 pr-4 shadow-md flex transition duration-500 ease-in-out items-center justify-between md:cursor-pointer task-item overflow-hidden"
  >
    <div class="flex items-center">
      <div
        :class="{ active: todo.done }"
        @click="toggle(todo)"
        class="list-toggle md:cursor-pointer pl-8 ml-4"
      ></div>
      <div class="text-lg flex items-center">
        <span class="px-2 task-title">{{ todo.text }}</span>
      </div>
    </div>
    <div class="swipe-list-main relative flex items-center">
      <svg
        :class="{ 'opacity-50': todo.done }"
        class="w-4 h-4 hash-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
      </svg>
      <div class="options-list pl-2">
        <div class="flex">
          <svg
            @click="removeTodo(todo.id)"
            class="w-6 h-6 text-red-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'taskItem',
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  methods: {
    toggleSheet() {
      this.isAddnew = !this.isAddnew
    },
    removeTodo(id) {
      this.$store.commit('list/remove', id)
    },
    ...mapActions({
      toggle: 'list/toggleStatus', // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
}
</script>