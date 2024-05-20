"use client"

import React, { ReactNode, useState } from "react";
import AppContext from "./AppContext";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [addServerModalOpen, setAddServerModalOpen] = useState(false);
  const [editServerModalOpen, setEditServerModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [serverID, setServerID] = useState("");
  const [userID, setUserID] = useState("");


  return (
    <AppContext.Provider
      value={{
        addServerModalOpen,
        editServerModalOpen,
        profileModalOpen,
        serverID,
        userID,
        setServerID,
        setUserID,
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
