import { db } from "./firebase";

export async function generateCertNo() {
  const ref = db.collection("certificate_counter").doc("counter");

  const certNo = await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const last = snap.data()?.last_number || 0;
    const next = last + 1;

    tx.update(ref, { last_number: next });
    return next;
  });

  return certNo.toString().padStart(5, "0");
}
