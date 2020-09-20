<template>
  <div class="container mx-auto px-4 flex items-center justify-center h-screen">
    <div class="w-full">
      <div
        v-for="(todo, i) in todos"
        :key="i"
        class="w-full md:w-1/3 mx-auto mb-4 bg-white rounded-lg py-4 px-4 shadow-md flex transition duration-500 ease-in-out items-center justify-between md:cursor-pointer task-item"
      >
        <div class="flex items-center">
          <div
            :class="{'active': todo.done}"
            @click="toggle(todo)"
            class="list-toggle md:cursor-pointer"
          ></div>
          <div class="text-lg flex items-center">
            <span class="px-2 task-title">{{ todo.text }}</span>
          </div>
        </div>
        <div>
          <svg
            :class="{'opacity-50': todo.done}"
            class="w-4 h-4"
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
        </div>
      </div>
    </div>
    <div
      class="fixed w-full bg-white bottom-0 addnew-sheet"
    >
      <div class="p-4 w-full h-full flex relative items-center justify-center">
        <div class="mb-3 w-full">
          <div class="relative">
            <span
              class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
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
            <input
              type="text"
              placeholder="Start typing..."
              class="px-3 py-3 w-full placeholder-gray-500 text-gray-700 relative bg-gray-200 bg-white rounded transition duration-500 text-sm focus:bg-gray-100 focus:border-none outline-none focus:outline-none focus:shadow-none w-full pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      isAddnew: false,
    }
  },
  computed: {
    ...mapGetters({
      todos: 'list/getList',
    }),
  },
  methods: {
    toggleSheet() {
      this.isAddnew = !this.isAddnew
    },
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    removeTodo(todo) {
      this.$store.commit('todos/remove', todo)
    },
    ...mapActions({
      toggle: 'list/toggleStatus', // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
<style lang="scss">
.addnew-sheet {
  transition: all 0.3s cubic-bezier(0.65, 0.68, 0.34, 1.42);
}
.openSheet {
  @apply h-56;
  border-radius: 3%;
  width: 95%;
}
.list-toggle {
  position: relative;
  height: 25px;
  width: 25px;

  &::before {
    content: '';
    height: 25px;
    width: 25px;
    background: #faf089;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &::after {
    content: '';
    height: 10px;
    width: 10px;
    background: black;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 7px;
    transform: scale(0.7);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &.active {
    &::before {
      transform: scale(1);
    }

    &::after {
      transform: scale(1);
      background: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'%3E%3C/path%3E%3C/svg%3E");
      top: 2px;
      left: 3px;
      height: 20px;
      width: 20px;
      background-size: 100%;
      background-repeat: none;
      opacity: 75%;
    }

    & + div {
      .task-title {
        &::before {
          animation: slideInto 0.8s cubic-bezier(0.77, 0, 0.175, 1);
          animation-fill-mode: both;
        }
      }
    }
  }
}

.task-title {
  position: relative;

  &::before {
    content: '';
    display: block;
    background: black;
    height: 7px;
    width: 7px;
    border-radius: 100%;
    position: absolute;
    left: 8px;
    top: 14px;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: absolute;
    left: -16.5px;
    top: 10.5px;
    opacity: 0;
  }
}
@keyframes slideInto {
  0% {
    height: 7px;
    width: 7px;
    left: -16.5px;
    top: 10.5px;
    opacity: 1;
    border-radius: 100%;
  }
  25% {
    left: 10px;
    top: 13.5px;
    opacity: 1;
  }
  30% {
    height: 2px;
    opacity: 1;
    left: 10px;
    top: 13.5px;
    border-radius: 0;
  }
  100% {
    height: 2px;
    opacity: 1;
    left: 10px;
    top: 13.5px;
    border-radius: 0;
    width: 95%;
  }
}
</style>
