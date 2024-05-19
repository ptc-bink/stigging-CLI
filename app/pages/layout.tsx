import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className="bg-cgrey-100 min-h-screen">
            <div className="sticky top-0">
                <Navbar />
            </div>
            <div className="flex">
                <Sidebar />
                <div className="w-full bg-cdark-100 min-h-[calc(100vh-88px)]">
                    {children}
                </div>
            </div>
        </body>
    );
}
