import React from "react";
import {
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";
import dayjs from "@/utils/dayjs";

export default function Calendar() {
  const [current_date, set_current_date] = React.useState(
    dayjs("2010-01-28").toDate()
  );

  const select_target_year = (num: number) => {
    const new_year = dayjs(current_date).add(num, "year");

    set_current_date(new_year.toDate());
  };

  const days_of_month = dayjs(current_date).daysInMonth();

  const days_of_last_month = dayjs(current_date)
    .subtract(1, "month")
    .daysInMonth();

  const start_day_of_current_month = dayjs(current_date).startOf("month").day();

  const rest_of_days_in_page =
    42 - days_of_month - (start_day_of_current_month % 7);

  return (
    <div className="relative mt-3 ml-3">
      <input type="text" />
      <div className="absolute px-4 py-2 border border-black rounded-md w-96">
        <div>
          <div className="flex flex-row items-center justify-between w-full px-4 py-1">
            <div className="flex flex-row gap-2">
              <button>
                <HiChevronDoubleLeft />
              </button>
              <button>
                <HiChevronLeft />
              </button>
            </div>
            <div className="flex flex-row gap-2">
              <span>{dayjs(current_date).year()}</span>
              <span>{dayjs(current_date).month() + 1}</span>
            </div>
            <div className="flex flex-row gap-2">
              <button>
                <HiChevronRight />
              </button>
              <button>
                <HiChevronDoubleRight />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 auto-cols-auto auto-rows-[1.5rem]">
          <div className="text-center">sun.</div>
          <div className="text-center">mon.</div>
          <div className="text-center">tues.</div>
          <div className="text-center">wed.</div>
          <div className="text-center">thur.</div>
          <div className="text-center">fri.</div>
          <div className="text-center">sat.</div>
          {Array.from({ length: start_day_of_current_month % 7 })
            .map((_, index) => (
              <div key={index} className="text-center">
                {days_of_last_month - index}
              </div>
            ))
            .reverse()}
          {Array.from({ length: days_of_month }).map((_, index) => (
            <div key={index} className="text-center">
              {index + 1}
            </div>
          ))}
          {Array.from({ length: rest_of_days_in_page }).map((_, index) => (
            <div key={index} className="text-center">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
