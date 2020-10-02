<template>
  <div class="fixed w-full bottom-0 bg-accent-color addnew-sheet">
    <div class="p-4 w-full h-full flex relative items-center justify-center">
      <div class="my-3 w-full">
        <div class="relative">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-accent-color absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </span>
          <form @submit.prevent="addTodo">
            <input
              type="text"
              v-model="task"
              placeholder="Start typing..."
              class="px-3 py-3 w-full placeholder-gray-700 bg-accent-ligher text-gray-800 relative bg-white rounded transition duration-500 text-md focus:bg-gray-100 outline-none focus:outline-none focus:shadow-none w-full pl-10"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { uuid } from 'vue-uuid'

export default {
  name: 'bottomNav',
  data() {
    return {
      task: '',
    }
  },
  methods: {
    addTodo() {
      if (this.task) {
        this.$store.dispatch('list/addNew', {
          id: uuid.v1(),
          text: this.task,
          done: false,
        })
        this.task = ''
      }
    },
  },
}
</script>