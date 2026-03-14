import AdminLayout from "../../components/AdminLayout";
import Link from "next/link";
import styles from "../../../styles/admin.module.css";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { ref, onValue, remove } from "firebase/database";

interface Student {
  id: string;
  studentName: string;
  course: string;
  enrollNo?: string;
  rollNo?: string;
  paymentStatus?: string;
  createdAt?: string;
  mobile?: string;
  certificateStatus?: string;
}

export default function ManageStudent() {
  const [students, setStudents] = useState<Student[]>([]);

  // ================= FETCH STUDENTS =================

  useEffect(() => {
    const studentsRef = ref(db, "students");

    onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const list: Student[] = Object.keys(data)
          .filter((key) => data[key].Role !== "admin")
          .map((key) => ({
            id: key,
            ...data[key],
          }));

        setStudents(list);
      }
    });
  }, []);

  // ================= DELETE =================

  const deleteStudent = async (id: string) => {
    if (!confirm("Delete this student?")) return;

    await remove(ref(db, "students/" + id));
  };

  return (
    <AdminLayout>
      <div className={styles.pageHeader}>
        <h1>Manage Student</h1>

        <Link href="/src/admin/add-student">
          <button className={styles.primaryBtn}>
            + Add Student
          </button>
        </Link>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Enroll No</th>
                <th>Roll  No</th>
                <th>Name</th>
                <th>Course</th>
                <th>Mobile</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "20px" }}>
                    No students found
                  </td>
                </tr>
              ) : (
                students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.enrollNo}</td>
                    <td>{student.rollNo}</td>

                    <td>{student.studentName}</td>
                    <td>{student.course}</td>

                    <td>
                      <span className={styles.badgeRed}>
                        {student.mobile || "Not Available"}
                      </span>
                    </td>

                    <td>
                      <span className={styles.badgeGray}>
                        {student.createdAt || "Not Available"}
                      </span>
                    </td>

                    <td>
                      <Link href={`/src/admin/edit-student?id=${student.id}`}>
                        <button className={styles.editBtn}>
                          Edit
                        </button>
                      </Link>

                      <button
                        className={styles.deleteBtn}
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>

    </AdminLayout>
  );
}