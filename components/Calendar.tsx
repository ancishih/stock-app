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

  // const _current_date = current_date.getDate();
  // const current_month = current_date.getMonth();
  // const current_year = current_date.getFullYear();
  // const current_day = dayjs(current_date).day();

  // console.log(_current_date, current_month, current_year, current_day);

  // const last_day_of_last_month = dayjs(current_date)
  //   .subtract(1, "month")
  //   .endOf("month");

  // const last_days_of_last_month =
  // console.log(dayjs(current_date).date())

  // const days_of_last_month = dayjs(current_date)
  //   .subtract(1, "month")
  //   .daysInMonth();

  // const last_days_of_last_month = dayjs(current_date)
  //   .subtract(1, "month")
  //   .toDate();

  // console.log(last_days_of_last_month);

  // const days_of_next_month = 6 - dayjs(current_date).add(1, "month").day();

  return (
    <div className="relative mt-3 ml-3">
      <input type="text" />
      <div className="absolute border border-black w-96">
        <div>
          <div className="flex flex-row items-center justify-between w-full px-4 py-1">
            <HiChevronDoubleLeft />
            <div>{dayjs(current_date).year()}</div>
            <HiChevronDoubleRight />
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between w-full px-4 py-1">
            <HiChevronLeft />
            <div>{dayjs(current_date).month() + 1}</div>
            <HiChevronRight />
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
