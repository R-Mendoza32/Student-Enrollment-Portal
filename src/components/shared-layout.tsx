import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

interface SharedLayoutProps {
  breadcrumb: string;
  children: React.ReactNode;
}

function PageContent({ breadcrumb, children }: SharedLayoutProps) {
  const { state, isMobile } = useSidebar();

  const sidebarPaddingLeft = isMobile
    ? "0rem"
    : state === "collapsed"
    ? "3rem"
    : "16rem";

  return (
    <div className="min-h-screen flex flex-col w-full bg-background">
      <header
        className="h-16 flex items-center justify-between border-b bg-card px-6 sticky top-0 z-10"
        style={{ paddingLeft: `calc(${sidebarPaddingLeft} + 1.5rem)` }}
      >
        <div className="flex items-center">
          <SidebarTrigger className="mr-4" />
          <div className="flex items-center space-x-2 text-sm text-muted-foreground ml-2">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-foreground font-medium">{breadcrumb}</span>
          </div>
        </div>
        <Link 
          to="/login" 
          className="px-6 py-3 bg-[#2a3990] text-white font-bold rounded-md hover:translate-y-[-2px] transition-transform"
        >
          LOGIN
        </Link>
      </header>
      <div className="flex-1 flex w-full">
        <AppSidebar />
        <main
          className="flex-1 p-6"
          style={{ paddingLeft: `calc(${sidebarPaddingLeft} + 1.5rem)` }} // Same padding as header
        >
          <div className="bg-card rounded-lg border shadow-sm w-full">
            <div className="p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export function SharedLayout({ breadcrumb, children }: SharedLayoutProps) {
  return (
    <SidebarProvider>
      <PageContent breadcrumb={breadcrumb}>{children}</PageContent>
    </SidebarProvider>
  );
}
