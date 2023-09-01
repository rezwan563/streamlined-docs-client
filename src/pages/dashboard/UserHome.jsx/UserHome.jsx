import ProfileCard from "./ProfileCard";
import TimeSection from "./TimeSection";
import CalendarSection from "./CalendarSection";

function DashboardHome() {
  return (
    <div className="flex justify-between p-8">
      <div className="w-3/4">
        <ProfileCard />
      </div>
      <div className="w-1/4">
        <TimeSection />
        <CalendarSection />
      </div>
    </div>
  );
}

export default DashboardHome;
