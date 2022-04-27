import GridWrapper from "../GridWrapper";

import { ReactComponent as Logo} from '../../../../assets/logo-roots.svg'

const Footer = () => (

  <GridWrapper className="bg-primary-neutral-100 py-4">
    <div className="col-span-4 flex justify-center">
      <Logo className="h-4"/>
    </div>
  </GridWrapper>
);

export default Footer;