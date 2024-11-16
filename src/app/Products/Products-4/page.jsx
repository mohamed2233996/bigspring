import React from 'react';
import img1 from '@/imges/videoT-About.webp'
import Imgwithtext from '@/components/imgwithtext';
import img3 from '@/imges/about2.webp'
import videoThumnail from '@/imges/videoT-About.webp'
import Image from 'next/image';
import Videomation from '@/components/videomation';
import Contact from '@/app/_section/Contact';
const Page = () => {
    return (

        <div>
            <Imgwithtext
                bg={"bg-themeLight dark:bg-themeDark"}
                title={"Analytics"}
                text={"Create a best strategic tool, share it with your team and ensure it’s on track with intuitive dashboards. Simple enough with the sophistication and flexibility to meet the needs"}
                textEnd={false}
                bigGap={true}
                order={true}
                itemsStart={false}
                ImgCarousel={false}
                ImgSrc={img1}
                btn={true}
                btnText={"Try for Free"}
                btnLink={"/contact"}
            />
            <Videomation
                headingText="Check out our video preview"
                pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin."
                videoThumnail={videoThumnail}
                videohref='https://www.youtube.com/embed/dyZcRRWiuuw?autoplay=1&mute=1'
            />
            <Contact
                noImg="true" />
        </div>
    );
}

export default Page;
