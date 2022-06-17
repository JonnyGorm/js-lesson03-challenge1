var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here
console.log("Today is " + new Date() + ".");
//

if (weekday === "Monday") {
  console.log("Let’s get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work");
} else if (weekday === "Wednesday") {
  console.log("Hump day, am I right...");
} else if (weekday === "Thursday") {
  console.log("Worky work");
} else if (weekday === "Friday") {
  console.log("Weekend's almost here!");
} else {
  console.log("WEEKEND, YAYYY!!!");
}
