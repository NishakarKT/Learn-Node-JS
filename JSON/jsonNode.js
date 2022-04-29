// JSON => Javascript Object Notation
// format for storing and transporting data
// light-weight
// data sent from a server to a webpage

const myData = {
    name: "Nishakar Kumar",
    roll: "20IE10019",
    dept: "Electrical Engineering"
}

let JSONdata = JSON.stringify(myData);
console.log(JSONdata);
console.log(JSON.parse(JSONdata));