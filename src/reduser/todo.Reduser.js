import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
 
const initialState = {
todo: [

],

}
export const add = createAction('add')
export const remove = createAction('delete')
export const patch = createAction('patch')

 const todoReduser = createReducer(initialState, (builder) => {
builder
.addCase(add, (state, action) => {
  state.todo.unshift({text: action.payload, completed: false})

})

.addCase(remove, (state, action) => {
    state.todo = state.todo.filter((item, index) => index !== action.payload)
})

.addCase(patch, (state, action) => {
  state.todo = state.todo.map((item, index) => {
    if (index === action.payload) {
      item.completed = !item.completed
      return item
    }
    return item
  })
})

 })




 export default todoReduser