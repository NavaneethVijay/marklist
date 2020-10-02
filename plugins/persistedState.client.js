import createPersistedState from 'vuex-persistedstate'

import Vue from 'vue'
import UUID from 'vue-uuid'

Vue.use(UUID)
export default ({ store }) => {
  createPersistedState({
    key: 'marklist'
  })(store)
}
