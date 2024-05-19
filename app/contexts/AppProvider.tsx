import React, { ReactNode, useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [addServerModalOpen, setAddServerModalOpen] = useState(false);
  const [editServerModalOpen, setEditServerModalOpen] = useState(false);


  return (
    <AppContext.Provider
      value={{
        addServerModalOpen,
        editServerModalOpen,
        setAddServerModalOpen,
        setEditServerModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
