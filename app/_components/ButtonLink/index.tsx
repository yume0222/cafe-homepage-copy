import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
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
