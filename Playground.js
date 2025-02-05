/* Dummy */
//callback hell
function task1(callback) {
  setTimeout(() => {
    console.log("task1 completed");
    callback();
  }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("task2 completed");
    callback();
  }, 1500);
}
function task3(callback) {
  setTimeout(() => {
    console.log("task3 completed");
    callback();
  }, 3000);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed");
    });
  });
});
