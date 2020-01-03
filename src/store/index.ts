import Vue from 'vue'
import Vuex from 'vuex'

import org from './org';
import reports from './reports'
import report from './report'
import user from './user'
import orgUsers from './orgUsers'
import samples from './samples'
import attestation from './attestation'
import version from './version'
import map from './map'
import contractors from './contractors'
import reviewers from './reviewers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    org,
    reports,
    user,
    orgUsers,
    report,
    samples,
    attestation,
    version,
    map,
    contractors,
    reviewers
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})