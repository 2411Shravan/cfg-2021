import React,{useState,useEffect}from 'react'
import { useAuth} from '../authentication/AuthContext'
import {AiFillCamera} from 'react-icons/ai'
import {db,storage,auth} from '../authentication/firebase'
import './createpost.css'
import firebase from 'firebase'

export default function Create() {
    const{currentUser}=useAuth();

    
    const [caption, setcaption] = useState('');
    const[image,setimage] = useState(null);
    const[userN,setuserN] = useState("");

    const [Progress, setProgress] = useState(0);


    useEffect(() => {
            db.collection('user').doc(currentUser.uid).get().then(doc=>{
        

        
                setuserN(doc.data().username);  
        
        console.log(doc.data().username);
       
   });
    },[])



    const handlechange=(e)=>{
        setcaption(e.target.value);
        };
        console.log(caption);
    

    const handlechangeImage=(e)=>{
        if(e.target.files[0]){
            setimage(e.target.files[0]);


            var selectImage = URL.createObjectURL(e.target.files[0]);
            var imagePriview = document.getElementById("image-preview");

            imagePriview.src = selectImage;
            imagePriview.style.display="block";
    }
        }
    
    function Makeid(a){

        var result="ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz123456789"
        var required="";
        for(var i=0;i<a;i++) {
            required+= result.charAt(Math.floor
                
                (Math.random() * a));
        }
        console.log(a);
        return required;
    }


    const handleupload=()=>{
        if(image){
            var imageName=Makeid(10);

            const uploadTask=storage.ref(`images/${imageName}.jpg`)
            .put(image);

            uploadTask.on("state_changed",(snapshot)=>{
                    
                
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                setProgress(progress);

            },(error) => {
                console.log(error);
            },()=>{
                storage.ref("images").child(`${imageName}.jpg`)
                .getDownloadURL()
                .then((imageUrl)=>{
                    db.collection("social").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        photoUrl:imageUrl,
                        username:userN,
                        

                    })
                }) ;
                
            });

           
        }
                setcaption("");
                setProgress(0);
                

    };












    return (
        <div className="text-center container">
            <h2 className="text-center mt-3">Express your thoughts,share your experiences through social posts</h2>
            <div className="createpost">
            {
                currentUser &&  (
                <div className="loggedIn">
                    <p>Create Post</p>
                    <div className="loggedInCenter">
                        <textarea className="createpostTextarea"
                            rows="3"
                            value={caption}
                            onChange={handlechange}
                            placeholder="Enter caption here."
                        >

                        </textarea>
                        <div className="createpostImagePreview">
                            <img id="image-preview" alt=""/>
                        </div>

                    </div>
                    <div className="have-both">
                    <div className="createPostImage">
                        <label htmlFor="fileInput">
                        <AiFillCamera style={{cursor:"pointer",fontSize:"25px"}}/>
                        </label>
                        <input id="fileInput" type="file" accept="image/*" onChange={handlechangeImage}/>
                    </div>
                    <button className="createPostUpload" onClick={handleupload}
                    style={{color:caption? "black" : "lightgrey"}}
                    >
                        {`Upload ${Progress!=0 ? Progress : ""}`}
                    </button>
                    </div>
                </div>
                )
            
            }
            
        </div>
        </div>
    )
        
}