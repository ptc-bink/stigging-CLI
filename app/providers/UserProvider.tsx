"use client"

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode;
    session: Session | null;
}

const Providers = ({ children, session }: ProvidersProps) => {

    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
};

export default Providers;
