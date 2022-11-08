import Header from "../Header";
import { ChildrenProps } from "~/types/common";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
