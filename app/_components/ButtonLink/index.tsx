import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
};

export default function ButtonLink({
  children,
  href,
  className,
  target,
  rel,
}: Props) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles.buttonCenter} ${className || ""}`}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
