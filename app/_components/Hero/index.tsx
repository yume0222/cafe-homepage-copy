import Title from "../Title";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Hero({ children, className }: Props) {
  return (
    <div className={`${styles.bgImg} ${className || ""}`}>
      <div className={styles.containerLarge}>
        <Title>{children}</Title>
      </div>
    </div>
  );
}
