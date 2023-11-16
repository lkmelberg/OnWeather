import React from "react";

export function emoji(temperature) {
  if (temperature <= -10) {
    return <span class="emoji"> 🧊</span>;
  } else if (temperature <= -5) {
    return <span class="emoji"> 🥶</span>;
  } else if (temperature <= 0) {
    return <span class="emoji"> ⛄</span>;
  } else if (temperature <= 5) {
    return <span class="emoji"> 😶‍🌫️</span>;
  } else if (temperature <= 10) {
    return <span class="emoji"> 😎</span>;
  } else if (temperature <= 15) {
    return <span class="emoji"> ☀️</span>;
  } else if (temperature <= 20) {
    return <span class="emoji"> 🔥</span>;
  } else {
    return <span class="emoji"> ;</span>;
  }
}
