// const a = 1;
// const b = 2;
// const gender = "male";

// const result = gender === "male" ? a : b;

// console.log(result);

// const error = undefined;
// const error2 = "You suck dic";
// console.log(error || error2);

// console.log(Math.floor(0.9));

// const mirrorTest = "Hi";
// const result2 = [...Array(3)].map((_, i) => mirrorTest + i);
// console.log(result2);

export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  console.log(date);
  console.log(date.getHours());
  console.log(hours);
  console.log(date.getMinutes());
  console.log(minutes);

  return `${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}

console.log(extractTime("2024-03-18T02:51:57.417Z"));
