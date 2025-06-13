
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardContent } from "@/components/dashboard-content";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b bg-card px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-foreground font-medium">Student Login</span>
            </div>
          </header>
          <main className="flex-1 p-6">
            <DashboardContent />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
