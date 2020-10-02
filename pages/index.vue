<template>
  <div class="container mx-auto px-4 flex items-center justify-center pt-10">
    <div class="w-full mb-10 pb-10 task-lister">
      <transition-group v-if="todos.length > 0" name="list-complete" tag="div">
        <task-item
          v-for="(todo, i) in todos"
          :key="i"
          :todo="todo"
          :class="{ active: todo.done, 'shadow-none': todo.done }"
          class="w-full md:w-1/3 list-complete-item mx-auto mb-4 bg-white rounded-lg py-2 pr-4 shadow-md flex transition duration-500 ease-in-out items-center justify-between md:cursor-pointer task-item overflow-hidden"
        >
        </task-item>
      </transition-group>
    </div>
    <bottom-nav />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      isAddnew: false,
      task: '',
    }
  },
  computed: {
    ...mapGetters({
      todos: 'list/getList',
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
</style><style lang="scss">
.task-item.active {
  background: #edd2cb;
}

.swipe-list-main {
  transform: translateX(40px);
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  .hash-icon {
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .options-list {
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    opacity: 0;
  }
  &:hover {
    .hash-icon {
      opacity: 0;
    }
    .options-list {
      opacity: 1;
    }
    transform: translateX(0);
  }
}

.task-lister > div {
  max-height: 100vh;
  margin-bottom: 60px;
  scrollbar-width: thin;
  /* "auto" or "thin"  */
  scrollbar-color: 361d32 #543c52;

  &::-webkit-scrollbar {
    width: 12px;
    /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #f1e8e6;
    /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #361d32;
    /* color of the scroll thumb */
    border-radius: 20px;
    /* roundness of the scroll thumb */
    border: 3px solid #f1e8e6;
    /* creates padding around scroll thumb */
  }
}

.list-complete-item {
  transition: all 0.4s;
  margin-right: 10px;
}

.list-complete-enter,
.list-complete-leave-to

/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}

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
    background: none;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    transition-delay: 0.3s;
  }

  &::after {
    content: '';
    height: 13px;
    width: 13px;
    background: black;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    top: 7px;
    left: 7px;
    transform: scale(0.7);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &.active {
    &::after {
      opacity: 0;
    }

    &::before {
      transform: scale(1.2);
      background: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'%3E%3C/path%3E%3C/svg%3E");
      top: 2px;
      left: 3px;
      height: 20px;
      width: 20px;
      background-size: 100%;
      background-repeat: none;
      opacity: 50%;
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
