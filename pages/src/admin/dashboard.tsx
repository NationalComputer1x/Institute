import AdminLayout from "../../components/AdminLayout";
import styles from "../../../styles/admin.module.css";
export default function Dashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div className={styles.cards}>

  <div className={styles.card}>
    <h3>Total Students</h3>
    <span>120</span>
  </div>

  <div className={styles.card}>
    <h3>Certificates Issued</h3>
    <span>95</span>
  </div>

  <div className={styles.card}>
    <h3>Pending Payments</h3>
    <span>25</span>
  </div>

</div>
    </AdminLayout>
  );
}