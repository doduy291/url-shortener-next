import Image from "next/image";
import Header from "../Header";
import bgImg from "../../../public/background.svg";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Image
        src={bgImg}
        alt="backgroundImg"
        quality={100}
        layout="fill"
        objectFit="cover"
        style={{
          zIndex: -1,
        }}
      />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
