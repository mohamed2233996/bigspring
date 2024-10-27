import Imgwithtext from '@/components/imgwithtext';
import AboutImg1 from "@/imges/about1.webp";
import AboutImg2 from "@/imges/about2.webp";
import React from 'react';

const About = () => {
    const AboutComp = [
        {
            bg: "bg-themeLight dark:bg-themeDark",
            title: 'It is the most advanced digital marketing company.',
            text: "Adipiscing elit Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
            order:false,
            ImgCarousel: true,
            CarouselImges: [
                { src: AboutImg1, alt: 'img1' },
                { src: AboutImg2, alt: 'img2' },
                { src: AboutImg1, alt: 'img3' }
            ]
        },
        {
            bg: "",
            title: 'It is a privately owned Information and cyber security company',
            text: "Adipiscing elit Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
            order:true,
            ImgCarousel: false,
            CarouselImges: [],
            ImgSrc: AboutImg2
        },
        {
            bg: "bg-themeLight dark:bg-themeDark",
            title: 'It’s a team of experienced and skilled people with distributions',
            text: "Adipiscing elit Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
            order:false,
            ImgCarousel: false,
            CarouselImges: [],
            ImgSrc: AboutImg1
        },
        {
            bg: "",
            title: 'A company standing different from others',
            text: "Adipiscing elit Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
            order:true,
            ImgCarousel: false,
            CarouselImges: [],
            ImgSrc: AboutImg2
        }
    ]


    return (
        <div>
            {AboutComp.map((item, index) => (
                <Imgwithtext
                    key={index}
                    bg={item.bg}
                    title={item.title}
                    text={item.text}
                    order={item.order}
                    ImgCarousel={item.ImgCarousel}
                    CarouselImges={item.CarouselImges?.map((img)=> (
                        { src: img.src, alt: img.alt }
                        )
                    )}
                    // CarouselImges={[
                    //     { src: AboutImg1, alt: 'img1' },
                    //     { src: AboutImg2, alt: 'img2' },
                    //     { src: AboutImg1, alt: 'img3' },
                    // ]}
                    ImgSrc={AboutImg1}
                />
            ))}

        </div>
    );
}

export default About;
