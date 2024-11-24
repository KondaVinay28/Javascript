// removes/replaces/add elements in place
// splice(start, deletCount, item0...itemN)
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
        //    0        1          2       3       4       5
// colors.splice(0, 0, "grey", "black");
let removedColors = colors.splice(0, 3);
console.log(colors);
// console.log(removedColors);