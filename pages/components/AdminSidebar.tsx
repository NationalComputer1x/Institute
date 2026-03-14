import Link from "next/link";
import styles from "../../styles/admin.module.css";

export default function AdminSidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>NCPL | CENTER PANEL</h2>

      <ul>
        <li><Link href="/src/admin/dashboard">Dashboard</Link></li>
        <li><Link href="/src/admin/manage-student">Manage Student</Link></li>
        <li><Link href="/src/admin/certificates">Download Certificates</Link></li>
        <li><button onClick={() => {
          localStorage.clear();
          window.location.href="/";
        }}>Logout</button></li>
      </ul>
    </div>
  );
}