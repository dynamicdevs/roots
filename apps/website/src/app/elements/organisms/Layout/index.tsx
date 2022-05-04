import { ReactNode } from "react";
import Footer from "@app/elements/organisms/Footer";
import Header from "@app/elements/organisms/Header";

type Props = {
  children: ReactNode;
}

const Layout = ({ children }:Props) => (
  <>
    <Header image={{ url: './assets/dd-image-profile.png', alt: 'Imagen de Perfil'}} />
    <div className="min-h-[calc(100vh-3rem)]">
      {children}
    </div>
    <Footer />
  </>
)

export default Layout;