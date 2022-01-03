import { defineStore } from 'pinia';

export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    identity: 'administrator'
  }),
  getters: {
    fontLen: (state) => state.identity.length
  },
  actions: {
    changeIdentity(data: string) {
      this.identity = data;
    }
  }
});
