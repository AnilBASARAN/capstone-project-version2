import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";


export const usePlantStore = create((set) => ({
  
  plants: [],
  isPlantsLoading: false,

  setPlants: (plants) => set({plants}),

  getPlants: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/plants");
      set({ plants: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch plants");
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getPlantById: async (plantId) => {
    
    set({ isUsersLoading: true });
     
    try {
      const res = await axiosInstance.get(`/plants/${plantId}`);
      set({ plants: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch plants");
    } finally {
      set({ isUsersLoading: false });
    }
  }
}));