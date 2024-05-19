"use client";

import * as React from "react";
import { type ReactNode } from "react";

import AppProvider from "./contexts/AppProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  );
}
