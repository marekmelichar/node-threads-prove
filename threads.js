const crypto = require("crypto");

const start = Date.now();

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

// run node threads.js in Terminal for results

// if node were single threaded, we would see the results as :
// pbkdf2 nr.1
// ---
// ---
// ---
// 1s
// pbkdf2 nr.2
// ---
// ---
// ---
// 2s

// if we had only 1 thread, we would see the sequence above

// but we get these results :

// pbkdf2 nr.1 | pbkdf2 nr.2
// ---
// ---
// ---
// 1s | 1.1s

// that is saying, that program happens outside of the Event Loop single threaded set-up
