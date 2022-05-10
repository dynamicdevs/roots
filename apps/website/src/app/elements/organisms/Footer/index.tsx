import GridWrapper from "@app/elements/organisms/GridWrapper";

import { ReactComponent as Logo} from '@assets/logo-roots.svg'

const Footer = () => (

  <GridWrapper className="bg-primary-neutral-100 py-4">
    <div className="col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 flex justify-center">
      <Logo className="h-4 md:h-6"/>
    </div>
  </GridWrapper>
);

export default Footer;