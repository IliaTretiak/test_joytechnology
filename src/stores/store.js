import {create} from 'zustand';
const storage = window.localStorage; 

const useStore = create(set => ({
  
  messager: [JSON.parse(storage.getItem("message"))],
  addMessage: () => {
    set((state) => ({ 
      ...state, 
      messager: [...state.messager, JSON.parse(storage.getItem("message"))]}))},
  correctMessage: (editer, message) => {
    set((state) => ({ 
      ...state, 
      messager: state.messager.toSpliced(editer, 1, message)
      }))},
}));


export default useStore;
