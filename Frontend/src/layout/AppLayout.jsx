import DashboardNavbar from "../components/dashboard/DashboardNavbar";

function AppLayout({
  children,
  variant = "dashboard",
  hasSidebar = false,
  onMenuClick,
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <DashboardNavbar
        variant={variant}
        hasSidebar={hasSidebar}
        onMenuClick={onMenuClick}
      />

      <main className="pt-16">{children}</main>
    </div>
  );
}

export default AppLayout;
