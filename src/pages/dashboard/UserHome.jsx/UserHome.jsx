import ProfileCard from "./ProfileCard";
import TimeSection from "./TimeSection";
import CalendarSection from "./CalendarSection";

function UsersHome() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full">
        <ProfileCard />
      </div>
      <div className="w-full">
        <TimeSection/>
        <CalendarSection />
      </div>
    </div>
  );
}

export default UsersHome;
