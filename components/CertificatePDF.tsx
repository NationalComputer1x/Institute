import {
  Document, Page, Text, View, StyleSheet, Image
} from "@react-pdf/renderer";
import QRCode  from "qrcode";

const styles = StyleSheet.create({
  page: { padding: 35, fontSize: 12 },
  border: { border: "2 solid black", padding: 20 },
  center: { textAlign: "center" },
  logo: { width: 80, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  name: { fontSize: 14, fontWeight: "bold", marginVertical: 10 },
  row: { marginTop: 20 },
  footer: { flexDirection: "row", justifyContent: "space-between", marginTop: 40 },
  sign: { width: 100 },
  seal: { width: 80 },
  qr: { width: 70 }
});

export default async function CertificatePDF({ data }: any) {
  const qr = await QRCode.toDataURL(
    `https://institute-sooty.vercel.app/verify/${data.certificateNo}`
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.border}>
          <Image src="/logo.png" style={styles.logo} />

          <Text style={{ textAlign: "right", fontSize: 10 }}>
            Certificate No. {data.certificateNo}
          </Text>

          <Text style={[styles.title, styles.center]}>
            CERTIFICATE
          </Text>

          <Text style={[styles.name, styles.center]}>
            {data.name} C/O {data.guardian}
          </Text>

          <Text style={styles.center}>
            Who have been completed the prescribed
          </Text>

          <Text style={[styles.center, { fontWeight: "bold" }]}>
            {data.course}
          </Text>

          <Text style={styles.center}>
            at {data.atc_name}
          </Text>

          <Text style={styles.center}>
            From {data.from_date} to {data.to_date}
          </Text>

          <Text style={styles.center}>
            With Grd - <Text style={{ fontWeight: "bold" }}>{data.grade}</Text>
          </Text>

          <View style={styles.row}>
            <Text>Date of Birth : {data.dob}</Text>
            <Text>Enrollment No : {data.enrollment_no}</Text>
            <Text>Date of Issue : {data.issue_date}</Text>
          </View>

          <View style={styles.footer}>
            <Image src="/signature.png" style={styles.sign} />
            <Image src="/seal.png" style={styles.seal} />
            <Image src={qr} style={styles.qr} />
          </View>
        </View>
      </Page>
    </Document>
  );
}
