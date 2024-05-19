import { createContext, useContext } from "react";

interface ContextType {
  addServerModalOpen: boolean;
  editServerModalOpen: boolean;
  setAddServerModalOpen: (addServerModalOpen: boolean) => void;
  setEditServerModalOpen: (editServerModalOpen: boolean) => void;
}

const initialValue: ContextType = {
  addServerModalOpen: false,
  editServerModalOpen: false,
  setAddServerModalOpen: (addServerModalOpen) => { },
  setEditServerModalOpen: (editServerModalOpen) => { },
};

const AppContext = createContext(initialValue);

export const useWallet = () => {
  return useContext(AppContext);
};

export default AppContext;
