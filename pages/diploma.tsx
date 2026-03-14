import React from "react";

export default function Diploma(): JSX.Element {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center p-6">
      <div className="w-[210mm] min-h-[297mm] bg-white border-[14px] border-green-900 shadow-2xl p-12 text-center">

        <h1 className="text-4xl font-bold text-green-900 uppercase">
          Maharishi Dayanand National Institute of Education
        </h1>

        <h2 className="mt-8 text-3xl font-bold text-yellow-700">
          Diploma
        </h2>

        <p className="mt-8 text-lg">
          This is to certify that
        </p>

        <h3 className="text-3xl font-bold underline mt-4">
          Neeraj Rajbhar
        </h3>

        <p className="mt-6 text-lg leading-8">
          has successfully completed the course <br />
          <b>Advance Diploma in Computer Application (ADCA)</b> <br />
          Duration: 20/02/2025 to 19/02/2026 (1 Year) <br />
          With Grade <span className="text-green-700 font-bold">A+</span>
        </p>

        <div className="mt-16 flex justify-between text-sm">
          <p>Date of Issue: 25/02/2026</p>
          <div>
            <div className="border-t w-40 border-black mx-auto"></div>
            <p>Authorized Signatory</p>
          </div>
        </div>

      </div>
    </div>
  );
}