import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function SubTitle({ children }: Props) {
  return <h2 className={`${styles.title} ${styles.titleCenter}`}>{children}</h2>;
}
