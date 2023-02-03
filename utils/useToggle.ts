import { useState } from "react";

export default function useToggle(default_is_open?: boolean) {
  const [is_open, set_is_open] = useState(default_is_open);

  const on_open = () => set_is_open(true);

  const on_close = () => set_is_open(false);

  return {
    is_open,
    on_close,
    on_open,
    set_is_open,
  };
}
