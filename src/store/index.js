import { createStore } from 'vuex'

export default createStore({
  state: {
    config,
    bg: config.bg, // default
    bgColor: config.bgColor, // default
    strelka: config.Strelka, // default
    isSidebarOpen: false,
    isDrop: false,
  },
  mutations: {
    changeBg: (state, bg) => state.bg = bg,
    changeColor: (state, color) => state.bgColor = color,
    changeStrelka: (state, strelka) => state.strelka = strelka,
    changeIsSidebarOpen: (state, bool) => state.isSidebarOpen = bool,
    toggleDrop: (state, bool) => state.isDrop = bool,
  },
})
