import {create} from 'zustand';

const useStore = create(set => ({
  messager: [],
  addMessage: (message) => {
    set((state) => ({ 
      ...state, 
      messager: [...state.messager, message]}))},
      // messager: [message]}))},
}));


export default useStore;
