import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SubTitle({ children, className }: Props) {
  return <h2 className={`${styles.title} ${styles.titleCenter} ${className || ""}`}>{children}</h2>;
}
