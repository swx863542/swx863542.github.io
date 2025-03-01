import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: string | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: async (username, password) => {
        if (username === 's863542' && password === '888888') {
          set({ user: username, isLoggedIn: true });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
); 