const fs = require("fs");
fs.mkdir("test-folder", function (err) {
if (err) {
throw(err);
} else {
console.log("Directory was created!");
}
});