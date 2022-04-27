import { ReactNode } from "react";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
}

const Layout = ({ children }:Props) => (
  <>
    <div className="min-h-[calc(100vh-3rem)]">
      {children}
    </div>
    <Footer />
  </>
)

export default Layout;