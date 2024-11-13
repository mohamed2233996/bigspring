import React from 'react';
import Imgwithtext from '@/components/imgwithtext';
import howitworksImg from '@/imges/how-it-works.svg'
import Videomation from '@/components/videomation';
import videoThumnail from "@/imges/videoT-About.webp"
import lineData from '@/data/timelineData';


const Page = () => {
    return (
        <div>
            <Imgwithtext
                bg="bg-themeLight dark:bg-themeDark"
                title="Your Partner for the best Software Innovation"
                text="Create a best strategic tool, share it with your team and ensure it’s on track with intuitive dashboards. Simple enough with the sophistication and flexibility to meet the needs"
                order={true}
                itemsStart={true}
                ImgCarousel={false}
                ImgSrc={howitworksImg}
                btn={true}
                btnText="Get started for Free"
                btnLink="/contact"
            />
            <Videomation
                headingText="Built exclusively for you"
                pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin."
                videoThumnail={videoThumnail}
                videohref='https://www.youtube.com/embed/dyZcRRWiuuw?autoplay=1&mute=1'
            />
            <div className='relative after:absolute after:h-[calc(100%-500px)] lg:after:w-[1px] after:bg-primary after:right-1/2 after:top-[250px]'>
                {lineData?.map((item) => (
                    <div className="relative after:absolute lg:after:w-8 after:h-8 after:bg-primary after:rounded-full after:right-1/2 after:bottom-[calc(100%-250px)] after:translate-x-1/2">
                        <Imgwithtext
                            bg={`${item.scendBg ? 'bg-themeLight dark:bg-themeDark' : ''}`}
                            title={item.headingText}
                            text={item.pText}
                            textEnd={item.imgorder}
                            bigGap={true}
                            order={item.imgorder}
                            itemsStart={false}
                            ImgCarousel={false}
                            ImgSrc={item.ImgSrc}
                            btn={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
