import { create } from "zustand";
import { axiosInstance } from "lib/axios";
import toast from "react-hot-toast";

export const useOrderStore = create((set) => ({
  orders: [],
  selectedOrder: null,
  isOrderLoading: false,

  setOrders: (orders) => set({ orders }),

  getOrders: async () => {
      set({ isOrderLoading: true });
      try {
          const res = await axiosInstance.get("/orders");
          set({ orders: res.data });
      } catch (error) {
          toast.error(error.response?.data?.message || "Failed to fetch orders");
      } finally {
          set({ isOrderLoading: false });
      }
  },

  getOrderByEmail: async (email) => {
      set({ isOrderLoading: true });
      try {
          const res = await axiosInstance.get(`/orders/${email}`);
          set({ selectedOrder: res.data });
      } catch (error) {
          toast.error(error.response?.data?.message || "Failed to fetch order by ID");
      } finally {
          set({ isOrderLoading: false });
      }
  }
}));
