import { create } from "zustand";

interface RantModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRantModal = create<RantModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRantModal;
