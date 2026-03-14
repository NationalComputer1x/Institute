"use client";
import React from "react";

interface Props {
  student: any;
  qr: string;
}

export default function MarksheetTemplate({ student, qr }: Props) {

  const total =
    student.subjects?.reduce(
      (sum: number, sub: any) => sum + Number(sub.marks),
      0
    ) || 0;

  const maxMarks = (student.subjects?.length || 0) * 100;

  const percentage =
    maxMarks > 0 ? (total / maxMarks) * 100 : 0;

  return (
    <div className="w-[210mm] h-[297mm] bg-white relative font-serif overflow-hidden">

      {/* Outer Border */}
      <div className="absolute inset-0 border-[16px] border-blue-900"></div>

      {/* Inner Border */}
      <div className="absolute inset-[22px] border-[4px] border-blue-400"></div>

 {/* FULL PAGE WATERMARK */}
<div
  style={{
    position: "absolute",
    inset: 0,
    opacity: 0.05,
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "120px",
    transform: "rotate(-25deg)",
    pointerEvents: "none",
  }}
>
  {Array.from({ length: 40 }).map((_, i) => (
    <div
      key={i}
      style={{
        fontSize: "40px",
        fontWeight: "bold",
        color: "#1e3a8a",
        textAlign: "center",
      }}
    >
      NCLP
    </div>
  ))}
</div>

      <div className="absolute inset-[60px] z-10">

        {/* HEADER */}
        <div className="flex items-center gap-4">

          <img
            src="/nclp_logo.jpeg"
            className="w-24 h-24 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-blue-900">
              NATIONAL COMPUTER LEARNING POINT
            </h1>

            <p className="text-sm">
              (Registered with the Ministry of Corporate Affair Govt of India.)
            </p>

            <p className="text-xs">
              AN ISO 9001:2015 CERTIFIED INSTITUTE
            </p>
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mt-6">
          <h2 className="text-4xl font-bold text-blue-900 tracking-wider">
            STATEMENT OF MARKS
          </h2>
        </div>

        {/* STUDENT INFO */}
        <div className="grid grid-cols-3 mt-6 gap-4">

          <div className="col-span-2 text-sm leading-7">

            <p><b>Student's Name</b> : {student.studentName}</p>
            <p><b>Father's Name</b> : {student.fatherName}</p>
            <p><b>Course</b> : {student.course}</p>
            <p><b>Course Duration</b> : {student.duration}</p>
            <p><b>Center Name</b> : {student.centerName}</p>
            <p><b>Center Code</b> : {student.centerCode}</p>
            <p><b>Enrollment Number</b> : {student.enrollNo}</p>
            <p><b>Student's Roll Number</b> : {student.rollNo}</p>

          </div>

          {/* PHOTO */}
          <div className="flex justify-end">
            <div className="border-4 border-gray-300 p-1 w-[110px] h-[130px]">
              <img
                src={student.photo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* SUBJECT TABLE */}
        <table className="w-full mt-6 border-collapse text-sm">

          <thead>
            <tr className="bg-blue-100 text-blue-900">
              <th className="border p-2 text-left">Module</th>
              <th className="border p-2 text-center">Max Marks</th>
              <th className="border p-2 text-center">Obtained Marks</th>
            </tr>
          </thead>

          <tbody>

            {student.subjects?.map((sub: any, i: number) => (
              <tr key={i}>
                <td className="border p-2">{sub.name}</td>
                <td className="border p-2 text-center">100</td>
                <td className="border p-2 text-center">{sub.marks}</td>
              </tr>
            ))}

            {/* TOTAL */}
            <tr className="font-bold bg-gray-100">
              <td className="border p-2 text-right">Total</td>
              <td className="border p-2 text-center">{maxMarks}</td>
              <td className="border p-2 text-center">{total}</td>
            </tr>

          </tbody>

        </table>

        {/* RESULT */}
        <div className="mt-4 text-sm leading-6">

          <p>
            <b>Percentage :</b> {percentage.toFixed(2)} %
          </p>

          <p>
            <b>Grade :</b> {percentage >= 60 ? "A" : percentage >= 50 ? "B" : "C"}
          </p>

          <p>
            <b>Date of Issue :</b> {student.issueDate}
          </p>

        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-end mt-10">

          {/* ASSOCIATION */}
          <div>
            <p className="text-xs mb-2">IN ASSOCIATION WITH</p>

            <div className="flex gap-3">
              <img src="/tally.png" className="h-10"/>
              <img src="/champion.png" className="h-10"/>
              <img src="/certiport.png" className="h-10"/>
            </div>
          </div>

          {/* QR + SIGN */}
          <div className="text-center">
            <img src={qr} className="w-20 mx-auto"/>
            <p className="text-sm mt-2">Director</p>
          </div>

        </div>

      </div>

    </div>
  );
}