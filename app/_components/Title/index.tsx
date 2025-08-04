import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <h1 className={`${styles.title} ${styles.titleWhite}`}>{children}</h1>;
}
