import {create} from 'zustand';
import {persist} from "zustand/middleware"

let store = (set) => ({
  messager: [],
  addMessage: (message) => {
    set((state) => ({ 
      ...state, 
      messager: [...state.messager, message]}))},
  correctMessage: (editer, message) => {
    set((state) => ({ 
      ...state, 
      messager: state.messager.toSpliced(editer, 1, message)
      }))},
  removeMessage: (editer) => {
    set((state) => ({ 
      messager: state.messager.toSpliced(editer, 1)
      }))},
});
store = persist(store, {name: "message"})

const useStore = create(store);

export default useStore;
