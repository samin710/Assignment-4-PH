function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  let sum = 0;
  for (let value of times) {
    if (!Number.isInteger(value)) {
      return "Invalid";
    }
    sum += value;
  }

  let minute = Math.floor(sum / 60),
    hour = 0,
    second = sum % 60;
  if (minute >= 60) {
    hour = Math.floor(minute / 60);
    minute %= 60;
  }

  return {
    hour: hour,
    minute: minute,
    second: second,
  };
}

// { hour: 0, minute: 10, second: 18 }
// { hour: 1, minute: 2, second:5 }
// { hour: 1, minute: 5, second: 0 }
// { hour: 0, minute: 0, second: 0 }
// { hour: 1, minute: 33, second: 20 }
// "Invalid"

console.log(calculateWatchTime([100, 99, 119, 300]));
console.log(calculateWatchTime([1000, 2000, 725]));
console.log(calculateWatchTime([100, 3800]));
console.log(calculateWatchTime([]));
console.log(calculateWatchTime([5600]));
console.log(calculateWatchTime([3600]));
console.log(calculateWatchTime([30]));
console.log(calculateWatchTime([60]));
console.log(calculateWatchTime([5]));
console.log(calculateWatchTime([3600]));
console.log(calculateWatchTime([7200]));
console.log(calculateWatchTime([7200.2]));
console.log(calculateWatchTime([100, 3800, "90"]));
console.log(typeof(.5))
