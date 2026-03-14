"use client";
import AdminLayout from "../../components/AdminLayout";

import styles from "../../../styles/admin.module.css";
import { useState } from "react";
import { db ,auth} from "@/lib/firebaseClient";
import { ref, push, set, get, } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
  signInWithPhoneNumber,
  RecaptchaVerifier
} from "firebase/auth";
export default function AddStudent() {
    const [form,setForm] = useState({
studentName:"",
relation:"",
fatherName:"",
motherName:"",
email:"",
dob:"",
joinDate:"",
course:"",
qualification:"",
state:"",
city:"",
mobile:"",
aadhaar:"",
password:"nationalcomputer@1234",
});

const [photo,setPhoto] = useState<File | null>(null);

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
setForm({...form,[e.target.name]:e.target.value});
};
const generateRollNo = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
const generateEnrollNo = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
const rollExists = async (db: any, roll: string) => {
  const snapshot = await get(ref(db, "rollIndex/" + roll));
  return snapshot.exists();
};
const enrollExists = async (db: any, enroll: string) => {
  const snapshot = await get(ref(db, "enrollIndex/" + enroll));
  return snapshot.exists();
};
const generateUniqueRoll = async (db:any) => {
  let roll;
  let exists = true;

  while (exists) {
    roll = generateRollNo();
    exists = await rollExists(db, roll);
  }

  return roll;
};
const generateUniqueEnroll = async (db:any) => {
  let enroll;
  let exists = true;

  while (exists) {
    enroll = generateEnrollNo();
    exists = await enrollExists(db, enroll);
  }

  return enroll;
};
const handlePhoto = (e:React.ChangeEvent<HTMLInputElement>)=>{
if(e.target.files){
setPhoto(e.target.files[0]);
}
};

const addStudent = async ()=>{

console.log("clicked",form,photo);

if(!photo){
alert("Please select photo");
return;
}

try{

// convert photo to base64
const reader = new FileReader();

const photoURL:string = await new Promise((resolve,reject)=>{
reader.onload = ()=> resolve(reader.result as string);
reader.onerror = reject;
reader.readAsDataURL(photo);
});
const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    );
//alert("User created with email: " + state.email);
    const user = userCredential.user;
    const rollNo = await generateUniqueRoll(db);
const enrollNo = await generateUniqueEnroll(db);
// save student in realtime database
/*await push(ref(db,"students"),{
...form,
photo:photoURL,
createdAt:Date.now(),
Role:"student"
});*/
await set(ref(db, "students/" + user.uid), {
 ...form,
photo:photoURL,
rollNo: rollNo,
  enrollNo: enrollNo,
createdAt:Date.now(),
Role:"student"
});

/* Index for fast uniqueness check */
await set(ref(db, "rollIndex/" + rollNo), user.uid);
await set(ref(db, "enrollIndex/" + enrollNo), user.uid);
alert("Student Added Successfully");

}catch(error){
//console.log(error);
alert("Error adding student: " + (error as Error).message);
}

};
  return (
  <AdminLayout>
 <h1>Add Student</h1>
    <div className={styles.addStudentContainer}>


     
 

      <div className={styles.formCard}>

        <div className={styles.formGrid}>

          <input name="studentName" placeholder="Student Name" onChange={handleChange} className={styles.inputField}/>

          <input name="relation" placeholder="Relation" onChange={handleChange} className={styles.inputField}/>

          <input name="fatherName" placeholder="Father Name" onChange={handleChange} className={styles.inputField}/>

          <input name="motherName" placeholder="Mother Name" onChange={handleChange} className={styles.inputField}/>

          <input name="email" placeholder="Email" onChange={handleChange} className={styles.inputField}/>

          <input type="date" name="dob" onChange={handleChange} className={styles.inputField}/>

          <input type="date" name="joinDate" onChange={handleChange} className={styles.inputField}/>

          <input name="course" placeholder="Course" onChange={handleChange} className={styles.inputField}/>

          <input name="qualification" placeholder="Qualification" onChange={handleChange} className={styles.inputField}/>

          <input name="state" placeholder="State" onChange={handleChange} className={styles.inputField}/>

          <input name="city" placeholder="City" onChange={handleChange} className={styles.inputField}/>

          <input name="mobile" placeholder="Mobile" onChange={handleChange} className={styles.inputField}/>

          <input name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} className={styles.inputField}/>

          <div className={styles.fileUpload}>
            <input type="file" onChange={handlePhoto}/>
          </div>

        </div>

        <button onClick={addStudent} className={styles.submitBtn}>
          Add Student
        </button>

      </div>

    </div>

  </AdminLayout>
);
}