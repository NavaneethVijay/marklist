export const state = () => ({
  items: [
    {
      text: 'Create a new marklist',
      done: true
    },
    {
      text: 'Flexible crud actions',
      done: false
    },
    {
      text: 'Find new logo',
      done: true
    }
  ]
})

export const getters = {
  getList: state => {
    return state.items
  }
}
export const mutations = {
  /**
   *
   * @param {*} state
   * @param {*} todo
   */
  add(state, todo) {
    state.items.push(todo)
  },
  /**
   *
   * @param {*} state
   * @param {*} param1
   */
  remove(state, { todo }) {
    state.items.splice(state.list.indexOf(todo), 1)
  },
  /**
   *
   * @param {*} state
   * @param {*} todo
   */
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
export const actions = {
  /**
   *
   * @param {*} context
   * @param {*} todo
   */
  addNew(context, todo) {
    context.commit('add', todo)
  },
  /**
   *
   * @param {*} context
   * @param {*} todo
   */
  toggleStatus(context, todo) {
    context.commit('toggle', todo)
  }
}
