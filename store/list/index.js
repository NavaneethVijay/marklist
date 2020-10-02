export const state = () => ({
  items: []
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
  remove(state, id) {
    state.items = state.items.filter(item => item.id != id)
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
