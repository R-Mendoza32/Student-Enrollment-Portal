
import { WelcomeCard } from "./welcome-card";
import { StudentsTable } from "./students-table";
import { HighlightsPanel } from "./highlights-panel";

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WelcomeCard />
        </div>
        <div className="lg:col-span-1">
          <HighlightsPanel />
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Students List</h2>
        <StudentsTable />
      </div>
    </div>
  );
}
