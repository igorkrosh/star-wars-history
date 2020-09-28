import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    transitionState: false, // Переменная определяет начало передоха между страницами в router.
    routerHistory: [], // Хранит историю перемещений между страницами.
  },
  getters: {
    TRANSITION_STATE: state => {
      return state.transitionState;
    },
    ROUTER_HISTORY: state => {
      return state.routerHistory;
    },
  },
  mutations: {
    SET_TRANSITION_STATE: (state, payload) => {
      state.transitionState = payload;
    },
    HISTORY_ADD_ROUTE: (state, payload) => {
      state.routerHistory.unshift(payload);
    }
  },
  actions: {
    SET_TRANSITION_STATE: (context, payload) => {
      context.commit('SET_TRANSITION_STATE', payload);
    },
    HISTORY_ADD_ROUTE: (context, payload) => {
      context.commit('HISTORY_ADD_ROUTE', payload);
    }
  },
});