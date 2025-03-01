import { create } from 'zustand'

interface UserState {
  isLoggedIn: boolean
  username: string
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  username: '',
  login: async (username: string, password: string) => {
    // 模拟登录验证
    if (username === 'admin' && password === '888888') {
      set({ isLoggedIn: true, username: 'admin' })
      return true
    }
    return false
  },
  logout: () => {
    set({ isLoggedIn: false, username: '' })
  },
})) 