"use client"

import React, { ReactNode, useState } from "react";
import AppContext from "./AppContext";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [addServerModalOpen, setAddServerModalOpen] = useState(false);
  const [editServerModalOpen, setEditServerModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);


  return (
    <AppContext.Provider
      value={{
        addServerModalOpen,
        editServerModalOpen,
        profileModalOpen,
        setAddServerModalOpen,
        setEditServerModalOpen,
        setProfileModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
