import { ReactNode } from "react";
import Footer from "@app/elements/organisms/Footer";
import Header from "@app/elements/organisms/Header";
import { ImageProps } from "@app/types/image.props";

type Props = {
  image: ImageProps;
  children: ReactNode;
}

const Layout = ({ image, children }:Props) => (
  <>
    <Header image={{ url: image.url, alt: image.alt }} />
    <div className="min-h-[calc(100vh-3rem)]">
      {children}
    </div>
    <Footer />
  </>
)

export default Layout;