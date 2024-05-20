import BigSidebar from "../components/BigSidebar";
import SmallSidebar from "../components/SmallSidebar"
import Navbar from "../components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className="bg-cgrey-100 min-h-screen">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="flex">
                <div className="md:block hidden bg-[#1D1E22]">
                    <BigSidebar />
                </div>
                <div className="w-full bg-cdark-100 min-h-[calc(100vh-88px)]">
                    {children}
                </div>
            </div>
            <div className="md:hidden block sticky bottom-0">
                <SmallSidebar />
            </div>
        </body>
    );
}
