import { create } from 'zustand';

type UserStore = {
  userId: string;
  userName: string;
  setUsername: (userName: string) => void;
};
export const useStore = create<UserStore>()((setState, getState, store) => ({
  userId: '',
  userName: '',
  setUsername: (userName: string) => setState({ userName }),
}));
