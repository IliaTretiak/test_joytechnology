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
});
store = persist(store, {name: "message"})

const useStore = create(store);

// const storage = window.localStorage; 

// const useStore = create(store, set => ({
//   messager: [JSON.parse(storage.getItem("message"))],
//   addMessage: (message) => {
//     set((state) => ({ 
//       ...state, 
//       messager: [...state.messager, JSON.parse(storage.getItem("message"))]}))},
      
//   correctMessage: (editer, message) => {
//     set((state) => ({ 
//       ...state, 
//       messager: state.messager.toSpliced(editer, 1, message)
//       }))},
// }));


export default useStore;
// storage.setItem("message", JSON.stringify(message));
