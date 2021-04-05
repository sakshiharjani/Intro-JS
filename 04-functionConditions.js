function food(meal) {
  if (meal == "breakfast") {
    return "toast";
  } else if (meal == "lunch") {
    return "pizza";
  } else if (meal == "dinner") {
    return "pasta";
  } else {
    return "I guess I should eat ice cream.";
  }
}

console.log(food("breakfast"));
console.log(food("lunch"));
console.log(food("dinner"));
console.log(food("something"));
