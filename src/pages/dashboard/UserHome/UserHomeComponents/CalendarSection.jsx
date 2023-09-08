import { useState } from "react";
import "./CalendarSection.css";

function CalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfWeek = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const renderCalendar = () => {
    let calendarDays = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(
        <li key={`prev-${i}`} className="inactive">
          {new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            -i
          ).getDate()}
        </li>
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isActive =
        i === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth();
      calendarDays.push(
        <li key={i} className={isActive ? "active" : ""}>
          {i}
        </li>
      );
    }
    return calendarDays;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="wrapper">
        <header className="header w-72 bg-gray-800 py-4 flex flex-col items-center justify-center relative">
          <div className="icons flex items-center">
            <button
              onClick={prevMonth}
              className="material-symbols-rounded cursor-pointer text-3xl text-white hover:text-gray-300 transition duration-300 absolute left-4"
            >
              &lt;
            </button>
            <button
              onClick={nextMonth}
              className="material-symbols-rounded cursor-pointer text-3xl text-white hover:text-gray-300 transition duration-300 absolute right-4"
            >
              &gt;
            </button>
          </div>
          <p className="current-date text-white text-lg font-semibold mt-2">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </header>
        <div className="calendar">
          <ul className="weeks">
            {daysOfWeek.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>
          <ul className="days">{renderCalendar()}</ul>
        </div>
      </div>
    </div>
  );
}

export default CalendarSection;
