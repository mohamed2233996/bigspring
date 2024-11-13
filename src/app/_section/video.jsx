import Videomation from '@/components/videomation';
import videoThumnail from "@/imges/videoT.webp"

const Video = () => {


    return (
        <Videomation
            headingText ="Built exclusively for you"
            pText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin."
            videoThumnail={videoThumnail}
            videohref ='https://www.youtube.com/embed/dyZcRRWiuuw?autoplay=1&mute=1'
        />
    );
}

export default Video;
