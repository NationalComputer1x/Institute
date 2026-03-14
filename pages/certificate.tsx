import React from "react";

export default function Certificate(): JSX.Element {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center p-6">
      <div className="w-[210mm] min-h-[297mm] bg-white border-[14px] border-blue-900 shadow-2xl relative overflow-hidden">

        {/* ===== WATERMARK PATTERN ===== */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none rotate-[-20deg]">
          <div className="grid grid-cols-10 gap-y-10 text-gray-500 text-xs font-bold tracking-[6px] text-center">
            {Array.from({ length: 600 }).map((_, i) => (
              <span key={i}>NCLP</span>
            ))}
          </div>
        </div>

        {/* ===== INNER BORDER ===== */}
        <div className="border-[4px] border-blue-400 m-3 h-full p-10 relative z-10">

          {/* HEADER */}
          <div className="relative text-center">

            <img
              src="/nclp_logo.jpeg"
              alt="logo"
              className="absolute left-0 top-0 w-36 h-36 object-cover border-4 border-blue-600 rounded-full"
            />

            <h1 className="text-3xl font-bold text-blue-900 uppercase">
              NATIONAL COMPUTER
            </h1>
            <h1 className="text-3xl font-bold text-blue-900 uppercase">
              LEARNING POINT
            </h1>

            <p className="text-sm mt-2">
              (Registered with the Ministry of Corporate Affair Govt. of India.)
            </p>

            <p className="font-semibold mt-1">
              AN ISO 9001:2015 CERTIFIED INSTITUTE
            </p>
          </div>

          {/* ROLL + ENROLL */}
          <div className="flex justify-between mt-8 px-6">

            <div className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold">
              Roll No.
              <span className="bg-white text-black px-4 py-1 ml-2 rounded">
                197876
              </span>
            </div>

            <div className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold">
              Enroll No
              <span className="bg-white text-black px-4 py-1 ml-2 rounded">
                G1103
              </span>
            </div>

          </div>

          {/* TITLE */}
          <h2 className="text-center text-6xl mt-12 font-serif italic">
            Certificate
          </h2>

          <p className="text-center mt-4 text-lg">
            This Certificate Is Proudly
          </p>

          {/* STUDENT PHOTO */}
          <div className="absolute right-16 top-[330px]">
            <img
              src="/student.jpg"
              alt="student"
              className="w-32 h-36 border-4 border-blue-600"
            />
          </div>

          {/* MAIN TEXT */}
          <div className="mt-10 text-lg leading-9 px-6">

            <p>
              Presented To :
              <span className="font-bold text-blue-800 ml-3">
                AMAR
              </span>
            </p>

            <p className="mt-2">
              S/o/D/o/W/o :
              <span className="font-bold text-blue-800 ml-3">
                RAM SAJEEVAN
              </span>
              <span className="ml-3">has successfully</span>
            </p>

            <p className="mt-2">
              Completed :
              <span className="font-bold text-blue-800 ml-3">
                ADVANCE DIPLOMA IN COMPUTER APPLICATION
              </span>
            </p>

            <p className="text-center mt-6">
              & entitled to all honors & privileges associated with this achievement
            </p>
          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-10 mt-12 px-6 text-base">

            <div>
              <p>
                Study Center :
                <span className="font-bold text-blue-800 ml-2">
                  NCLP
                </span>
              </p>

              <p className="mt-4">
                Duration :
                <span className="ml-3 border px-4 py-1">
                  JUN 2022
                </span>
                <span className="mx-3">To</span>
                <span className="border px-4 py-1">
                  MAY 2023
                </span>
              </p>

              <p className="mt-4">
                Grade :
                <span className="ml-3 border px-6 py-1 font-bold">
                  D
                </span>
              </p>

              <p className="mt-4">
                Mark in Percentage :
                <span className="ml-3 border px-6 py-1 font-bold">
                  52%
                </span>
              </p>

              <p className="mt-4">
                Date of Issue :
                <span className="ml-3 border px-6 py-1">
                  25-09-2023
                </span>
              </p>
            </div>

          </div>

          {/* FOOTER */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">

            <div>
              <img
                src="/qr.png"
                alt="qr"
                className="w-24"
              />
            </div>

            <div className="text-center">
              <div className="border-t w-44 border-black mx-auto"></div>

              <p className="mt-2 font-semibold text-blue-900">
                Director
              </p>

              <p className="text-sm">
                National Computer Learning Point
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}