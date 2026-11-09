import { create } from "zustand";

const useMessageStore = create((set) => ({
    messages: [],
    getMessage: async (own = false) => {
        try {
            const res = own
            ? await api.getMyMessages() 
            : await api.getMessages()
                set ({ messages: res.data })
        } catch (error) {
        console.error(error)
    }
    },

}))