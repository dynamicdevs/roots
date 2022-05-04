import { FC } from "react";

import { ImageProps } from "@app/types/image.props";

type Props = {
  image: ImageProps
}

const ProfilePicture:FC<Props> = ({ image }) => (
  <div className="h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-full relative overflow-auto">
    <img src={image.url} alt={image.alt} className="absolute object-center h-full w-full" /> 
  </div>
)

export default ProfilePicture;