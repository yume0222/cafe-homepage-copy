import Hero from "../_components/Hero";
import HeroStyles from "../_components/Hero/index.module.css";
import Sheet from "../_components/Sheet";
import SheetStyles from "../_components/Sheet/index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero className={HeroStyles.bgImgConsept}>consept</Hero>
      <Sheet className={SheetStyles.container}>{children}</Sheet>
    </>
  );
}
