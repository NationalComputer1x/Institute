import type { NextApiRequest, NextApiResponse } from 'next'

import { renderToStream } from "@react-pdf/renderer";
import CertificatePDF from "../../components/CertificatePDF";
import { db } from "@/lib/firebase";
import { generateCertNo } from "@/lib/certNumber";

type Data = {
  error: string,
  msg?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

      const enrollment = req.query.enrollment;
      const dob = req.query.dob;
    console.log("Received Request:", { enrollment, dob });
      if (!enrollment || !dob) {
        return  res.status(400).json({ error: "Missing data" });
      }
    
      // 🔐 Validate student
      const snap = await db.collection("students").doc(enrollment).get();
    
      if (!snap.exists) {
        return  res.status(200).json({ error: "Student not found" });
      }
    
      const student = snap.data();
    
      if (student?.dob !== dob) {
        return  res.status(200).json({ error: "Invalid DOB" });
      }
    
      // 🔢 Generate certificate number
      const certificateNo = await generateCertNo();
      console.log("Generated Certificate No:", certificateNo);
    
      // 🧾 Generate PDF
      const stream = await renderToStream(
        await CertificatePDF({
          data: {
            ...student,
            enrollment_no: enrollment,
            certificateNo,
          },
        })
      );
    
     // return  res.status(200).json({ name: 'John Doe' })
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=certificate.pdf");

    stream.pipe(res);
    /*  new NextResponse(stream as any, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": "inline; filename=certificate.pdf",
        },
      });*/
}     