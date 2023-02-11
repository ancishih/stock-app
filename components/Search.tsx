import React from "react";
import useToggle from "@/utils/useToggle";
import $ from "jquery";
export default function SearchBar({ placeholder }: { placeholder?: string }) {
  const wrapRef = React.useRef<HTMLInputElement>(null);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const { is_open, on_open, on_close } = useToggle();

  // const handle_input_focus = () => {
  //   on_open();
  //   $("nav").addClass("hidden");
  //   $("main").addClass("relative");
  // };

  // const handle_input_blur = () => {
  //   on_close();
  //   $("nav").removeClass("hidden");
  //   $("main").removeClass("relative");
  // };

  // React.useEffect(() => {
  //   inputRef && inputRef.current && inputRef.current.focus();
  // }, [is_open]);

  return (
    <>
      <div className="relative">
        <input
          className="border input border-grey-900"
          type="text"
          placeholder="search..."
        />
        <div className=""></div>
      </div>
    </>
  );
}
