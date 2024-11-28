import { create } from "zustand";
import { axiosInstance } from "lib/axios";
import toast from "react-hot-toast";

export const usePlantStore = create((set) => ({
  plants: [],
  selectedPlant: null,
  isPlantsLoading: false,

  setPlants: (plants) => set({ plants }),

  getPlants: async () => {
      set({ isPlantsLoading: true });
      try {
          const res = await axiosInstance.get("/plants");
          set({ plants: res.data });
      } catch (error) {
          toast.error(error.response?.data?.message || "Failed to fetch plants");
      } finally {
          set({ isPlantsLoading: false });
      }
  },

  getPlantById: async (plantId) => {
      set({ isPlantsLoading: true });
      try {
          const res = await axiosInstance.get(`/plants/${plantId}`);
          set({ selectedPlant: res.data });
      } catch (error) {
          toast.error(error.response?.data?.message || "Failed to fetch plant by ID");
      } finally {
          set({ isPlantsLoading: false });
      }
  }
}));
