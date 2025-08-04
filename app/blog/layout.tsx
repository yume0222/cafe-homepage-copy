import Hero from "../_components/Hero";
import HeroStyles from "../_components/Hero/index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero className={HeroStyles.bgImgBlog}>consept</Hero>
      {children}
    </>
  );
}
