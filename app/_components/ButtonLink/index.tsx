import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function ButtonLink({ children, href, className }: Props) {
  const isExternal = href.startsWith("http") || href.startsWith("https");
  if (isExternal) {
    return (
      <a
        href={href}
        className={`${styles.button} ${styles.buttonCenter} ${className || ""}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles.buttonCenter} ${className || ""}`}
    >
      {children}
    </Link>
  );
}
