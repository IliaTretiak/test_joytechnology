
import {create} from 'zustand';
import {persist} from "zustand/middleware"

let store = (set) => ({
  messager: [], 
  addMessage: (message, date) => {
    set((state) => ({ 
      messager: [...state.messager, 
        {
          id: `${Math.floor(Math.random() * 100)}`,
          question: message,
          time: date,
        }],
      }))},
  correctMessage: (editer, message, date) => {
    set((state) => ({ 
      ...state, 
      messager: state.messager.toSpliced(editer, 1, {id: editer, question: message, time: date}),
      }))},
  removeMessage: (editer) => {
    set((state) => ({ 
      ...state, 
      messager: state.messager.toSpliced(editer, 1),
      }))},
});
store = persist(store, {name: "store"})
const useStore = create(store);
export default useStore;


