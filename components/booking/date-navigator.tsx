import Button from "@/components/primitives/button";
import {
  IDate,
  getFormattedDate,
  isBeforeToday,
  isMonthBeforeCurrent,
} from "@/components/booking/booking";
import LeftArrow from "@/assets/icons/LeftArrow";
import RightArrow from "@/assets/icons/RightArrow";

interface IDateNavigatorProps {
  selectedDate: IDate;
  setSelectedDate: React.Dispatch<React.SetStateAction<IDate>>;
}
export const getMaxDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};
const DateNavigator = ({
  selectedDate,
  setSelectedDate,
}: IDateNavigatorProps) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Button
          key={`${selectedDate.day}${selectedDate.month}${selectedDate.year}`}
          color="yellow"
          theme="light"
          disabled={isBeforeToday(
            getFormattedDate(
              new Date(
                selectedDate.year,
                selectedDate.month,
                selectedDate.day - 1
              )
            )
          )}
          onClick={() => {
            setSelectedDate((prev) => {
              const { day, month, year } = prev;
              const newDay =
                day - 1 < 1 ? getMaxDaysInMonth(month - 1, year) : day - 1;
              const newMonth = day - 1 < 1 ? month - 1 : month;
              const newYear = day - 1 < 1 ? year : year;
              return {
                ...prev,
                day: newDay,
                dayName: Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                }).format(new Date(year, newMonth, newDay)),
                month: newMonth,
                monthName: Intl.DateTimeFormat("en-US", {
                  month: "long",
                }).format(new Date(year, newMonth)),
                year: newYear,
              };
            });
          }}
        >
          <LeftArrow width={24} height={24} />
        </Button>
        <div className="text-lg font-bold">
          {selectedDate.dayName} {selectedDate.day}
        </div>
        <Button
          color="yellow"
          theme="light"
          onClick={() => {
            setSelectedDate((prev) => {
              const { day, month, year } = prev;
              const maxDaysInMonth = getMaxDaysInMonth(month, year);
              const newDay = day + 1 > maxDaysInMonth ? 1 : day + 1;
              const newMonth = day + 1 > maxDaysInMonth ? month + 1 : month;
              const newYear = day + 1 > maxDaysInMonth ? year : year;
              return {
                ...prev,
                day: newDay,
                dayName: Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                }).format(new Date(year, newMonth, newDay)),
                month: newMonth,
                monthName: Intl.DateTimeFormat("en-US", {
                  month: "long",
                }).format(new Date(year, newMonth)),
                year: newYear,
              };
            });
          }}
        >
          <RightArrow width={24} height={24} />
        </Button>
      </div>
      <div className="border-b-2 border-black my-4"></div>
      <div className="flex justify-between items-center">
        <Button
          key={selectedDate.month}
          color="yellow"
          theme="light"
          disabled={isMonthBeforeCurrent(
            selectedDate.month - 1,
            selectedDate.year
          )}
          onClick={() => {
            setSelectedDate((prev) => {
              const { month, year } = prev;
              const newMonth = month - 1 < 0 ? 11 : month - 1;
              const newYear = month - 1 < 0 ? year - 1 : year;
              const newDate = {
                ...prev,
                month: newMonth,
                monthName: Intl.DateTimeFormat("en-US", {
                  month: "long",
                }).format(new Date(year, newMonth)),
                year: newYear,
              };

              return isBeforeToday(newDate) ? getFormattedDate() : newDate;
            });
          }}
        >
          <LeftArrow width={24} height={24} />
        </Button>
        <div className="text-lg font-bold">
          {selectedDate.monthName} {selectedDate.year}
        </div>
        <Button
          color="yellow"
          theme="light"
          onClick={() => {
            setSelectedDate((prev) => {
              const { month, year } = prev;
              const newMonth = month + 1 > 11 ? 0 : month + 1;
              const newYear = month + 1 > 11 ? year + 1 : year;

              return {
                ...prev,
                month: newMonth,
                monthName: Intl.DateTimeFormat("en-US", {
                  month: "long",
                }).format(new Date(year, newMonth)),
                year: newYear,
              };
            });
          }}
        >
          <RightArrow width={24} height={24} />
        </Button>
      </div>
    </>
  );
};

export default DateNavigator;
