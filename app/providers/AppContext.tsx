import { createContext, useContext } from "react";

interface ContextType {
  addServerModalOpen: boolean;
  editServerModalOpen: boolean;
  profileModalOpen: boolean;
  serverID: string;
  userID: string;
  setAddServerModalOpen: (addServerModalOpen: boolean) => void;
  setEditServerModalOpen: (editServerModalOpen: boolean) => void;
  setProfileModalOpen: (profileModalOpen: boolean) => void;
  setServerID: (serverID: string) => void;
  setUserID: (userID: string) => void;

}

const initialValue: ContextType = {
  addServerModalOpen: false,
  editServerModalOpen: false,
  profileModalOpen: false,
  serverID: "123",
  userID: "456",
  setUserID: (userID) => { },
  setServerID: (serverID) => { },
  setAddServerModalOpen: (addServerModalOpen) => { },
  setEditServerModalOpen: (editServerModalOpen) => { },
  setProfileModalOpen: (profileModalOpen) => { },
};

const AppContext = createContext(initialValue);

export default AppContext;
