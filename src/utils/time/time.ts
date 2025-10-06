export const get12HourFormat = (time: number) : string => {
    if (time > 12) {
        return `${time-12}${time == 24 ? "am" : "pm"}`;
    } else {
        return `${time}${time == 12 ? "pm" : "am"}`
    }
}