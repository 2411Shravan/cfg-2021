import { useState } from "react";
import { storage, db, timestamp } from '../authentication/firebase';
import "./add.css"


const storeimg = (file) => {
    // references
  console.log("file content",file.name);
  const storageRef = storage.ref().child(file.name);
  const collectionRef = storage.collection('images');
    
  storageRef.put(file).on('state_changed', (snap) => {
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    console.log("image upload progress",percentage);
    }, (err) => {
      console.log("image upload error",err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
    });
}

const Add = ({ onAdd }) => {
  //states that this form has!
  const [Name, setName] = useState("");
  const [Task, setTask] = useState("");
  const [Time, setTime] = useState("");
  const [Location, setLocation] = useState("");
  const [Date, setDate] = useState("");
  const [Description, setDescription] = useState("");
  const [Proof, setProof] = useState("");
  const [geolocation, setlocation] = useState(false);

  //functionality that is accomplished on submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (!Name) {
      alert("Please Add Name");
      return;
    }
    if (!Task) {
      alert("Please Add Task");
      return;
    }
    if (!Time) {
      alert("Please Add Time");
      return;
    }
    if (!Location) {
      alert("Please Add Location");
      return;
    }
    if (!Date) {
      alert("Please Add Date");
      return;
    }

    onAdd({
      Name,
      Task,
      Time,
      Location,
      Date,
      Description,
      Proof,
      geolocation,
    });

    setName("");
    setTask("");
    setDate("");
    setDescription("");
    setLocation("");
    setProof("");
    setTime("");
    setlocation("");
  };
  
  return (
    <div className="form_body container" style={{width:"50%"}}>
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Task Done By You</label>
        <input
          type="text"
          placeholder="Add Task"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Hours spent on field</label>
        <input
          type="number"
          placeholder="Add Time Spent"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Location</label>
        <input
          type="text"
          placeholder="Add Location "
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add Date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>upload image</label>
        <input
          type="file"
          id="proof"
          name="image Uploads"
          accept="image/png, image/jpeg"
          value={Proof}
          onChange={(e) => storeimg(e.target.files[0])}
        ></input>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
    </div>
  );
};

export default Add;