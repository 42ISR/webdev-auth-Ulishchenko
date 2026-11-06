import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const useUserStore = create()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) => {
        set({ user });
      },
      clearUser: () => {
        set({ user: undefined }); 
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);