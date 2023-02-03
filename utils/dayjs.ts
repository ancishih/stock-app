import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(updateLocale);

export default dayjs;
