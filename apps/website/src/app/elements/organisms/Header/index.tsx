import ProfilePicture from "@app/elements/molecules/ProfilePicture";
import { ImageProps } from "@app/types/image.props";
import GridWrapper from "@app/elements/organisms/GridWrapper";

type Props = {
  image: ImageProps
}

const Header = ({ image }:Props) => (
  <GridWrapper className="bg-gradient-to-r from-gradient-ocean-310 to-gradient-ocean-320 h-30 lg:h-40 mb-14 md:mb-20 lg:mb-32">    
    <div className="col-span-2 col-start-2 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-6 flex justify-center relative">
      <div className="absolute top-18 md:top-14 lg:top-16">
        <ProfilePicture image={image}/>
      </div>
    </div>
  </GridWrapper>
)

export default Header;