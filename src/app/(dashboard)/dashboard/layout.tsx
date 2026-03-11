import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "next-themes";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors">
        {/* Permanent Sidebar */}
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Top Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}