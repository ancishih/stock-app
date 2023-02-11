import React from "react";
import {
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";
import dayjs from "@/utils/dayjs";
import useToggle from "@/utils/useToggle";
import { CSSTransition } from "react-transition-group";
import $ from "jquery";
export default function Calendar() {
  const [current_date, set_current_date] = React.useState(
    dayjs("2011-02-28").toDate()
  );

  const [modal_offset, set_modal_offset] = React.useState(0);

  // date
  const days_of_month = dayjs(current_date).daysInMonth();

  const days_of_last_month = dayjs(current_date)
    .subtract(1, "month")
    .daysInMonth();

  const start_date_of_current_month = dayjs(current_date)
    .startOf("month")
    .toDate();

  const start_day_of_current_month = dayjs(current_date).startOf("month").day();

  const rest_of_days_in_page =
    42 - days_of_month - (start_day_of_current_month % 7);

  const is_same_day = (index: number) =>
    dayjs(start_date_of_current_month)
      .add(index, "day")
      .isSame(current_date, "day");

  const is_same_month = (index: number) =>
    dayjs(current_date).month() === index;

  const is_same_year = (index: number) => dayjs(current_date).year() === index;

  // month list
  const month = [
    { text: "January", value: 0 },
    { text: "February", value: 1 },
    { text: "March", value: 2 },
    { text: "April", value: 3 },
    { text: "May", value: 4 },
    { text: "June", value: 5 },
    { text: "July", value: 6 },
    { text: "August", value: 7 },
    { text: "September", value: 8 },
    { text: "October", value: 9 },
    { text: "November", value: 10 },
    { text: "December", value: 11 },
  ];

  // year list
  const start_of_decade = Math.floor(dayjs(current_date).year() / 10) * 10;

  const { is_open, on_open, on_close } = useToggle();

  const select_year = (evt: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = evt.currentTarget as HTMLDivElement;

    const year = Number(dataset.year);

    const new_year = dayjs(current_date).year(year);

    set_current_date(new_year.toDate());
  };

  const select_month = (evt: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = evt.currentTarget as HTMLDivElement;

    const month = Number(dataset.month);

    const new_month = dayjs(current_date).month(month);

    set_current_date(new_month.toDate());
  };

  const select_date = (evt: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = evt.currentTarget as HTMLDivElement;

    const date = Number(dataset.date);

    const new_date = dayjs(current_date).date(date);

    set_current_date(new_date.toDate());
    on_close();
  };

  const select_last_month_date = (evt: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = evt.currentTarget as HTMLDivElement;
    const num = Number(dataset.num);
    const new_date = dayjs(current_date)
      .subtract(1, "month")
      .date(num)
      .toDate();
    set_current_date(new_date);
    on_close();
  };

  const select_next_month_date = (evt: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = evt.currentTarget as HTMLDivElement;
    const num = Number(dataset.num);
    const new_date = dayjs(current_date).add(1, "month").date(num).toDate();
    set_current_date(new_date);
    on_close();
  };

  const add_one_month = () => {
    set_current_date((date) => dayjs(date).add(1, "month").toDate());
  };

  const sub_one_month = () => {
    set_current_date((date) => dayjs(date).subtract(1, "month").toDate());
  };

  const show_calendar_when_focused = () => on_open();

  const nodeRef = React.useRef<HTMLDivElement>(null);

  // const inputRef = React.useRef<HTMLInputElement>("");

  // inputRef.current.value = dayjs(current_date).format("YYYY-MM-DD");

  return (
    <div className="relative">
      <input
        type="text"
        className="border input border-grey-900"
        onFocus={show_calendar_when_focused}
      />
      <CSSTransition
        in={is_open}
        nodeRef={nodeRef}
        timeout={0}
        onEnter={on_open}
        onExit={on_close}
        unmountOnExit
        className={`absolute bg-white border rounded-lg drop-shadow-lg border-gray-900/20 w-96`}
      >
        <div ref={nodeRef} className="px-4 py-2">
          <div className="">
            <div className="flex flex-row items-center justify-between w-full px-4 py-1">
              <div className="flex flex-row gap-2 text-xl text-grey-700">
                <button>
                  <HiChevronDoubleLeft />
                </button>
                <button className="" onClick={sub_one_month}>
                  <HiChevronLeft />
                </button>
              </div>
              {/* 顯示日期 */}
              <div className="flex flex-row gap-2 target_date">
                <span className="cursor-pointer select-none">
                  {dayjs(current_date).year()}
                </span>
                <span className="cursor-pointer select-none">
                  {dayjs(current_date).month() + 1}
                </span>
                <span className="cursor-pointer select-none">
                  {dayjs(current_date).date()}
                </span>
              </div>
              <div className="flex flex-row gap-2 text-xl text-grey-700">
                <button className="" onClick={add_one_month}>
                  <HiChevronRight />
                </button>
                <button>
                  <HiChevronDoubleRight />
                </button>
              </div>
            </div>
          </div>
          {/* 選擇年份 */}
          {/* <div className="grid grid-cols-3 auto-cols-auto">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                className={`text-center ${
                  is_same_year(start_of_decade + index) ? "" : ""
                }`}
                key={index}
                data-year={start_of_decade + index}
                onClick={select_year}
              >
                {start_of_decade + index}
              </div>
            ))}
          </div> */}
          {/* 選擇月份 */}
          {/* <div className="grid grid-cols-3 auto-cols-auto">
            {month.map(({ text, value }) => (
              <div
                className={`text-center ${
                  is_same_month(value) ? "text-red-600" : ""
                }`}
                key={value}
                data-month={value}
                onClick={select_month}
              >
                {text}
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-7 auto-cols-auto gap-2 auto-rows-[2rem] pb-2 px-2">
            <div className="calendar_day text-grey-600/75">sun.</div>
            <div className="calendar_day">mon.</div>
            <div className="calendar_day">tues.</div>
            <div className="calendar_day">wed.</div>
            <div className="calendar_day">thur.</div>
            <div className="calendar_day">fri.</div>
            <div className="calendar_day">sat.</div>
            {Array.from({ length: start_day_of_current_month % 7 })
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div
                    data-num={days_of_last_month - index}
                    className="prev_calendar_date"
                    onClick={select_last_month_date}
                  >
                    {days_of_last_month - index}
                  </div>
                </div>
              ))
              .reverse()}
            {Array.from({ length: days_of_month }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div
                  className={`calendar_date ${
                    is_same_day(index) ? "active" : ""
                  }`}
                  data-date={index + 1}
                  onClick={select_date}
                >
                  {index + 1}
                </div>
              </div>
            ))}
            {Array.from({ length: rest_of_days_in_page }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div
                  data-num={index + 1}
                  className="next_calendar_date"
                  onClick={select_next_month_date}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
