import { useState, useEffect } from "react";
import { db } from "../authentication/firebase";
import { Bar } from "react-chartjs-2";

//retreiving data here

const BarGraph = () => {
  const [arrayHours, setArrayHours] = useState([]);
  const [arrayDate, setArrayDate] = useState([]);

  useEffect(() => {
      db
      .collection("Task")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().Date);
          setArrayDate(arrayDate => [...arrayDate,doc.data().Date]);
        });
      });
    console.log(arrayDate);
    db
      .collection("Task")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setArrayHours(arrayHours => [...arrayHours,doc.data().Time]);
        });
      });
  console.log(arrayHours);
}, []);
const state = {
  labels: arrayDate,
  datasets: [
    {
      label: "hours",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: arrayHours,
    },
  ],
  
};
    return (
      <div>
        {console.log(state)}
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Hours spent on a particular day on field",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}

          
        />
      </div>
  );
}

export default BarGraph;
