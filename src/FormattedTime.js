import React from "react";

export default function FormattedTime(props) {
  let date = new Date(props.time);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let amOrPm = "a.m.";

  if (hours >= 12) {
    amOrPm = "p.m.";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${days[day]} ${hours}:${minutes} ${amOrPm}`;
}
