export const ADD_ITEM = 'ADD_ITEM'


const initialState = []

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload]
  }
  return state
}

export default ItemsReducer