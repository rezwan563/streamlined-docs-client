import ProfileCard from "../UserHomeComponents/ProfileCard";
import TimeSection from "../UserHomeComponents/TimeSection";
import CalendarSection from "../UserHomeComponents/CalendarSection";

function UsersHome() {
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

export default UsersHome;
