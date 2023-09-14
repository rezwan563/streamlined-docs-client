import ProfileCard from "./ProfileCard";
import TimeSection from "./TimeSection";
import CalendarSection from "./CalendarSection";

function UsersHome() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full">
        <ProfileCard />
      </div>
      <div className="w-full">
        <div className="flex justify-center"> <TimeSection /></div>
        <CalendarSection />
      </div>
    </div>
  );
}

export default UsersHome;
