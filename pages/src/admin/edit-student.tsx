"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebaseClient";
import { ref, get, update } from "firebase/database";
import AdminLayout from "../../components/AdminLayout";
import styles from "../../../styles/admin.module.css";// reuse same CSS

export default function EditStudent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchStudent = async () => {
      const snapshot = await get(ref(db, "students/" + id));
      if (snapshot.exists()) {
        setStudent(snapshot.val());
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e: any) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    if (!id) return;

    await update(ref(db, "students/" + id), student);

    alert("Student Updated Successfully ✅");
    router.push("/src/admin/manage-student");
  };

  if (!student) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <div className={styles.formContainer}>
  <h2 className={styles.formTitle}>Edit Student</h2>

  <form onSubmit={handleUpdate} className={styles.formGrid}>

    <div className={styles.formGroup}>
      <label>Student Name</label>
      <input
        type="text"
        name="studentName"
        value={student.studentName || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Relation</label>
      <input
        type="text"
        name="relation"
        value={student.relation || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Father Name</label>
      <input
        type="text"
        name="fatherName"
        value={student.fatherName || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Mother Name</label>
      <input
        type="text"
        name="motherName"
        value={student.motherName || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={student.email || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={student.dob || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Join Date</label>
      <input
        type="date"
        name="joinDate"
        value={student.joinDate || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Course</label>
      <input
        type="text"
        name="course"
        value={student.course || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Qualification</label>
      <input
        type="text"
        name="qualification"
        value={student.qualification || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>State</label>
      <input
        type="text"
        name="state"
        value={student.state || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>City</label>
      <input
        type="text"
        name="city"
        value={student.city || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Mobile</label>
      <input
        type="text"
        name="mobile"
        value={student.mobile || ""}
        onChange={handleChange}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Aadhaar Number</label>
      <input
        type="text"
        name="aadhaar"
        value={student.aadhaar || ""}
        onChange={handleChange}
      />
    </div>

    <button type="submit" className={styles.submitBtn}>
      Update Student
    </button>

  </form>
</div>
    </AdminLayout>
  );
}