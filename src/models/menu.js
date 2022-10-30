export const menu = {
  state: {
    items: [],
    isMenuOpen: false,
    showScrollToTop: false,
    itemActive: 'home',
    navigationHeight: 0,
    currentUrl: '',
    typeHeader: '',
    open : false
  },
  reducers: {
    setOpen(state,open){
      return {
        ...state,
        open : open
      }
    },
    setUrl(state,url){
      return {
        ...state,
        currentUrl : url
      }
    },
    setItemActive(state, slug) {
      return {
        ...state ,
        itemActive: slug
      }
    },
    setMenuState(state) {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }
    },
    setScrollToTop(state, payload) {
      return {
        ...state,
        showScrollToTop: payload
      }
    },
    setNavigationHeight(state, newHeight) {
      return {
        ...state,
        navigationHeight: newHeight
      }
    },
    setCurrentUrl(state, currentUrl) {
      return {
        ...state,
        currentUrl: currentUrl
      }
    },
    setTypeHeader(state, typeHeader){
      return {
        ...state,
        typeHeader: typeHeader
      }
    }
  },
  effects: {

  }
}
