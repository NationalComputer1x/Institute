import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import styles from "../../styles/admin.module.css";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className={styles.container}>
      <AdminSidebar />
      <div className={styles.main}>{children}</div>
    </div>
  );
}