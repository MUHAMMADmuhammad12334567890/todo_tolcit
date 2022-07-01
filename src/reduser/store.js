import { configureStore } from '@reduxjs/toolkit'
import todoReduser from './todo.Reduser'

const store = configureStore({
    reducer : todoReduser
})


export default store