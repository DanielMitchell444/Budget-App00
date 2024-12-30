import React, { useState } from "react";
import styles from "../Styles/App.module.css"; // Import your CSS module


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);

    const calendarDays = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }

    // Add the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day);
    }

    return calendarDays;
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextMonth);
  };

  const calendarDays = generateCalendar();

  return (
    <div className={styles.calendarSmall}>
      <div className={styles.calendarHeaderSmall}>
        <button onClick={handlePrevMonth} className={styles.navButtonSmall}>&lt;</button>
        <h3 className={styles.monthDisplaySmall}>
          {currentDate.toLocaleString("default", { month: "long" })} {" "}
          {currentDate.getFullYear()}
        </h3>
        <button onClick={handleNextMonth} className={styles.navButtonSmall}>&gt;</button>
      </div>
      <div className={styles.calendarGridSmall}>
        {/* Render days of the week */}
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.calendarDayOfWeekSmall}>
            {day}
          </div>
        ))}
        {/* Render calendar days */}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`${styles.calendarCellSmall} ${day ? styles.daySmall : styles.emptySmall}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
