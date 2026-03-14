"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { ref, get } from "firebase/database";

export default function VerifyPage() {

const searchParams = useSearchParams();
const id = searchParams.get("id");

const [student,setStudent] = useState<any>(null);
const [loading,setLoading] = useState(true);

useEffect(()=>{

if(!id) return;

const fetchStudent = async ()=>{

const snapshot = await get(ref(db,"students/"+id));

if(snapshot.exists()){
setStudent(snapshot.val());
}

setLoading(false);

};

fetchStudent();

},[id]);

if(loading){
return <div className="p-10 text-xl">Checking Certificate...</div>;
}

if(!student){
return(

<div className="p-10">

<h1 className="text-3xl text-red-600 font-bold">
❌ Invalid Certificate
</h1>

<p className="mt-4">
This certificate does not exist in our database.
</p>

</div>

);
}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white p-8 rounded shadow w-[500px]">

<h1 className="text-2xl font-bold text-green-600 mb-6">
✅ Certificate Verified
</h1>

<div className="flex gap-6">

<img
src={student.photo}
className="w-32 h-32 object-cover border"
/>

<div>

<p><b>Name:</b> {student.studentName}</p>

<p><b>Father:</b> {student.fatherName}</p>

<p><b>Course:</b> {student.course}</p>

<p><b>Join Date:</b> {student.joinDate}</p>

<p><b>Certificate ID:</b> {id}</p>

</div>

</div>

</div>

</div>

);
}