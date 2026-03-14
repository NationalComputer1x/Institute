import AdminLayout from "../../components/AdminLayout";
import styles from "../../../styles/admin.module.css";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { ref, onValue, update } from "firebase/database";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactDOM from "react-dom/client";
import CertificateTemplate from "../admin/CertificateTemplate";
import DiplomaTemplate from "../admin/DiplomaTemplate";
import MarksheetTemplate from "../admin/MarksheetTemplate";

interface Subject {
  name: string;
  marks: string;
}

interface Student {
  id: string;
  studentName: string;
  fatherName: string;
  course: string;
  joinDate: string;
  photo: string;
  rollNo?: string;
  enrollNo?: string;
  subjects?: Subject[];
}

export default function Certificates() {
    const [students, setStudents] = useState<Student[]>([]);
  const [selected, setSelected] = useState<Student | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([{ name: "", marks: "" }]);
const [searchName, setSearchName] = useState("");
const [searchEnroll, setSearchEnroll] = useState("");
  // ================= FETCH =================

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

  // ================= UNIVERSAL PDF FUNCTION =================

  const generateComponentPDF = async (
    component: JSX.Element,
    fileName: string
  ) => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(component);

    await new Promise((r) => setTimeout(r, 800));

    const canvas = await html2canvas(container.firstChild as HTMLElement, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
    pdf.save(fileName);

    root.unmount();
    document.body.removeChild(container);
  };

  // ================= CERTIFICATE / DIPLOMA =================

  const downloadCertificate = async (student: Student) => {
    const verifyURL = `https://ncplinstitute.vercel.app/verify?id=${student.id}`;
    const qr = await QRCode.toDataURL(verifyURL);

    if (student.course.toLowerCase().includes("diploma")) {
      await generateComponentPDF(
        <DiplomaTemplate student={student} qr={qr} />,
        `${student.studentName}_Diploma.pdf`
      );
    } else {
      await generateComponentPDF(
        <CertificateTemplate student={student} qr={qr} />,
        `${student.studentName}_Certificate.pdf`
      );
    }
  };

  // ================= MARKSHEET =================

  const downloadMarksheet = async (student: Student) => {
    const verifyURL = `https://ncplinstitute.vercel.app/verify?id=${student.id}`;
    const qr = await QRCode.toDataURL(verifyURL);

    await generateComponentPDF(
      <MarksheetTemplate student={student} qr={qr} />,
      `${student.studentName}_Marksheet.pdf`
    );
  };


  // ================= RESULT SAVE =================

  const addSubjectField = () => {
    setSubjects([...subjects, { name: "", marks: "" }]);
  };

  const handleSubjectChange = (
    index: number,
    field: keyof Subject,
    value: string
  ) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const saveSubjects = async () => {
    if (!selected) return;

    await update(ref(db, "students/" + selected.id), {
      subjects: subjects,
    });

    alert("Result Saved Successfully");
    setSelected(null);
  };

const filteredStudents = students.filter((student) => {
  const nameMatch = student.studentName
    ?.toLowerCase()
    .includes(searchName.toLowerCase());

  const enrollMatch = student.enrollNo
    ?.toLowerCase()
    .includes(searchEnroll.toLowerCase());

  return nameMatch && enrollMatch;
});
  return (
    <AdminLayout>
     <div className={styles.pageHeader}>
  <h1 className={styles.pageTitle}>Download Certificates</h1>
</div>

<div className={styles.searchCard}>
  <div className={styles.searchGrid}>
   <input
  placeholder="🔎 Enrollment No"
  className={styles.searchInput}
  value={searchEnroll}
  onChange={(e) => setSearchEnroll(e.target.value)}
/>

<input
  placeholder="👤 Student Name"
  className={styles.searchInput}
  value={searchName}
  onChange={(e) => setSearchName(e.target.value)}
/>

    <button className={styles.searchBtn}>
      Search
    </button>
  </div>
</div>

     
      <h1 className="text-2xl font-bold mb-6">Student List</h1>
  <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
 
        <thead >
          <tr>
            <th >Name</th>
            <th >Course</th>
            <th >Enrollment No</th>
            <th >Certificate</th>
            <th >Marksheet</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length === 0 ? (
    <tr>
      <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
        No students found
      </td>
    </tr>
  ) :
          (filteredStudents.map((student) => (
            <tr key={student.id}>
              <td >{student.studentName}</td>
              <td >{student.course}</td>
 <td >{student.enrollNo}</td>
              <td >
                <button
                  onClick={() => downloadCertificate(student)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  🎓 Certificate / Diploma
                </button>
              </td>

              <td >
                <button
                  onClick={() => downloadMarksheet(student)}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  📄 Download Marksheet
                </button>

                <button
                  onClick={() => {
                    setSelected(student);
                    setSubjects(student.subjects || [{ name: "", marks: "" }]);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  ✏ Manage Result
                </button>
              </td>
            </tr>
          )))
          }
        </tbody>
      </table>
</div>

      {/* RESULT MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 w-[500px] rounded">
            <h2 className="text-xl font-bold mb-4">
              Manage Result for {selected.studentName}
            </h2>

            {subjects.map((sub, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  placeholder="Subject Name"
                  className="border p-2 w-1/2"
                  value={sub.name}
                  onChange={(e) =>
                    handleSubjectChange(index, "name", e.target.value)
                  }
                />
                <input
                  placeholder="Marks"
                  className="border p-2 w-1/2"
                  value={sub.marks}
                  onChange={(e) =>
                    handleSubjectChange(index, "marks", e.target.value)
                  }
                />
              </div>
            ))}

            <button
              onClick={addSubjectField}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
            >
              + Add More Subject
            </button>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setSelected(null)}
                className="bg-gray-400 text-white px-4 py-1 rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveSubjects}
                className="bg-green-600 text-white px-4 py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </AdminLayout>
  );
}