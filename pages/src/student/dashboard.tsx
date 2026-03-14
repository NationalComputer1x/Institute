import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebaseClient";
import { get, ref } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import styles from "../../../styles/dashboard.module.css";

export default function StudentDashboard() {
  const [studentData, setStudentData] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "/";
      } else {
        const snapshot = await get(ref(db, "students/" + user.uid));
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.Role !== "student") {
            window.location.href = "/";
          }
          setStudentData(data);
        }
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>Student Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>My Profile</li>
          <li>My Course</li>
          <li>My Certificate</li>
          <li>Payment Status</li>
        </ul>
      </div>

      <div className={styles.main}>
        <h2>Student Dashboard</h2>

        <div className={styles.card}>
          <h3>WELCOME, {studentData?.studentName}</h3>
          <p>Email: {studentData?.email}</p>
          <p>Mobile: {studentData?.mobile}</p>
        </div>
      </div>
    </div>
  );
}