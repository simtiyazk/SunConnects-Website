
import API from '../api/api'

export const products = {
  state: {
    items: null,
    currentItem: null
  },
  reducers: {
    setDataSuccess(state, items){
      return {
        ...state,
        items: items
      }
    },

    setCurrentItem(state, currentItem){
      return {
        ...state,
        currentItem: currentItem
      }
    }
  },
  effects: {
    async getProducts(url, state) {
      await API.getRequest(url)
      .then(response => {
        this.setDataSuccess(response.data);
      }).catch(error => {
        this.setError(true);
        console.log(error)
      });
    }
  }
}
