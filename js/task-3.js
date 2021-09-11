const message = "checkForSpam";
let result;
let normalizedMessage;
// Change code below this line
normalizedMessage = message.toLowerCase();
result = normalizedMessage.includes(spam) || normalizedMessage.includes(sale);
// Change code above this line
console.log(result);
return result;
