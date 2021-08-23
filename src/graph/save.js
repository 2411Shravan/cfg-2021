import { db } from "../authentication/firebase";

//selecting Data from the database
//const data = document.querySelector("#add-form");
//var reference = projectDatabase.collection("Task");

//adding data into the database]
const saveTask = (...currentTask) => {
  console.log("currentTask", currentTask);
  //we used id for prototype but in reality will work on email address
  const pid = currentTask[0];
  db.collection("Task").add({
    
    Name: currentTask[1],
    Task: currentTask[2],
    Time: currentTask[3],
    Location: currentTask[4],
    Date: currentTask[5],
    Description: currentTask[6],
    location: currentTask[7],
  });
};

export default saveTask;
