import { getYouTuBeId } from "@/utils/video";

type Props =  {
  url: string;
}

const VideoEmbed = ({ url }:Props) => {

  const videoId = getYouTuBeId(url);

  return (
    <div className="relative w-full pt-[62.5%]">
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`Video ${videoId}`}
        className="w-full h-full absolute left-0 top-0 rounded"
        frameBorder="0"       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default VideoEmbed;