import React from "react";

interface Subject {
  name: string;
  max: number;
  min: number;
  obtained: number;
}

export default function Marksheet(): JSX.Element {
  const subjects: Subject[] = [
    { name: "Fundamentals of Accounts & Inventory", max: 50, min: 17, obtained: 45 },
    { name: "Advance Inventory & Capabilities", max: 50, min: 17, obtained: 44 },
    { name: "Fundamentals of Advance Taxation", max: 50, min: 17, obtained: 43 },
    { name: "Payroll & Advance Features", max: 50, min: 17, obtained: 42 },
    { name: "Tally Prime with GST", max: 50, min: 17, obtained: 41 },
    { name: "Advance Excel", max: 50, min: 17, obtained: 40 },
  ];

  const total = subjects.reduce((sum, s) => sum + s.obtained, 0);

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center p-6">
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl border-8 border-green-800 p-8">

        {/* Header */}
        <div className="text-center border-b-4 border-yellow-600 pb-4">
          <h1 className="text-3xl font-extrabold text-green-900 uppercase">
            Maharishi Dayanand National Institute of Education
          </h1>
          <p className="text-yellow-700 font-semibold mt-2">
            An ISO 9001:2015 Certified Organization
          </p>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-red-700 mt-6 underline">
          Statement of Marks
        </h2>

        {/* Student Info */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <p><b>Student Name:</b> Abdul Haleem</p>
          <p><b>Enrollment No:</b> MDNIE/IND/5789</p>
          <p><b>Father’s Name:</b> Mustaqim Ahmad</p>
          <p><b>Course:</b> Certificate in Accounting (Tally with GST)</p>
          <p><b>Center Code:</b> MDUP-118</p>
          <p><b>Date of Issue:</b> 23/02/2026</p>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border mt-6 text-sm">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="border p-2 text-left">Paper</th>
              <th className="border p-2">Max</th>
              <th className="border p-2">Min</th>
              <th className="border p-2">Obtained</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((sub, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2 text-left">{sub.name}</td>
                <td className="border p-2">{sub.max}</td>
                <td className="border p-2">{sub.min}</td>
                <td className="border p-2">{sub.obtained}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Result */}
        <div className="mt-6 flex justify-between font-bold text-lg">
          <p>Total Marks: {total}/300</p>
          <p className="text-green-700">Grade: A+</p>
          <p>Result: 1st Division</p>
        </div>

        {/* Footer */}
        <div className="mt-16 flex justify-between text-sm">
          <p>Seal & QR Code</p>
          <div className="text-center">
            <div className="border-t w-40 border-black mx-auto"></div>
            <p>Authorized Signature</p>
          </div>
        </div>

      </div>
    </div>
  );
}