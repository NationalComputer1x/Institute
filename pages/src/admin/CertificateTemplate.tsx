"use client";

import React from "react";

interface Props {
  student: any;
  qr: string;
}

export default function CertificateTemplate({ student, qr }: Props) {
  return (
    <div
      style={{
        width: "210mm",
        height: "297mm",
        background: "white",
        position: "relative",
        overflow: "hidden",
        fontFamily: "serif",
      }}
    >
      {/* OUTER BORDER */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "16px solid #1e3a8a",
        }}
      />

      {/* INNER BORDER */}
      <div
        style={{
          position: "absolute",
          inset: "22px",
          border: "5px solid #60a5fa",
        }}
      />

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

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "absolute",
          inset: "65px",
          zIndex: 10,
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center", position: "relative" }}>
          <img
            src="/nclp_logo.jpeg"
            alt="logo"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "105px",
              height: "105px",
              borderRadius: "50%",
              border: "4px solid #1e3a8a",
              objectFit: "cover",
            }}
          />

          <h1
            style={{
              fontSize: "34px",
              fontWeight: 800,
              color: "#1e3a8a",
              letterSpacing: "1px",
            }}
          >
            NATIONAL COMPUTER
          </h1>

          <h1
            style={{
              fontSize: "34px",
              fontWeight: 800,
              color: "#1e3a8a",
              letterSpacing: "1px",
            }}
          >
            LEARNING POINT
          </h1>

          <p style={{ fontSize: "13px", marginTop: "8px" }}>
            (Registered with the Ministry of Corporate Affair Govt. of India)
          </p>

          <p style={{ fontWeight: 600, marginTop: "4px", color: "#1e3a8a" }}>
            AN ISO 9001:2015 CERTIFIED INSTITUTE
          </p>
        </div>

        {/* ROLL / ENROLL */}
        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 40px",
          }}
        >
          <div style={rollBox}>
            Roll No :
            <span style={valueBox}>{student.rollNo}</span>
          </div>

          <div style={rollBox}>
            Enroll No :
            <span style={valueBox}>{student.enrollNo}</span>
          </div>
        </div>

        {/* TITLE */}
        <div style={{ textAlign: "center", marginTop: "65px" }}>
          <h2
            style={{
              fontSize: "68px",
              fontStyle: "italic",
            }}
          >
            Certificate
          </h2>

          <p style={{ marginTop: "8px", fontSize: "18px" }}>
            This Certificate Is Proudly Presented To
          </p>
        </div>

        {/* PHOTO */}
        <img
          src={student.photo}
          alt="student"
          style={{
            position: "absolute",
            right: "40px",
            top: "360px",
            width: "130px",
            height: "160px",
            border: "4px solid #1e3a8a",
            objectFit: "cover",
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            marginTop: "55px",
            fontSize: "20px",
            lineHeight: "42px",
          }}
        >
          <p>
            Presented To :
            <span style={highlight}>{student.studentName}</span>
          </p>

          <p>
            S/o :
            <span style={highlight}>{student.fatherName}</span>
          </p>

          <p>
            Completed :
            <span style={highlight}>{student.course}</span>
          </p>

          <p style={{ textAlign: "center", marginTop: "40px" }}>
            & entitled to all honors & privileges associated with this achievement
          </p>
        </div>

        {/* FOOTER */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* QR */}
          <div>
            <img src={qr} alt="qr" style={{ width: "90px" }} />
            <p style={{ fontSize: "12px", textAlign: "center" }}>Verify</p>
          </div>

          {/* SIGNATURE */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                borderTop: "1px solid black",
                width: "200px",
                margin: "5px auto",
              }}
            />
            <p style={{ fontWeight: 600, color: "#1e3a8a" }}>Director</p>
            <p style={{ fontSize: "12px" }}>
              National Computer Learning Point
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const rollBox = {
  background: "#1e40af",
  color: "white",
  padding: "6px 16px",
  borderRadius: "5px",
  fontWeight: 600,
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const valueBox = {
  background: "white",
  color: "black",
  width: "90px",              // fixed width for perfect centering
  height: "30px",
  borderRadius: "4px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",   // ✅ horizontal center
  textAlign: "center" as const,
};

const highlight = {
  fontWeight: "bold",
  marginLeft: "12px",
  color: "#1e3a8a",
};