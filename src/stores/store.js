import {create} from 'zustand';

const useStore = create(set => ({
  messager: ['Hello, World!'],
  addMessage: (message) => {
    set((state) => ({ 
      messager: [message]}))},

}));

export default useStore;
