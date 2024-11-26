import React from 'react';
import teamImg1 from '@/imges/team1.webp';
import teamImg2 from '@/imges/team2.webp';
import teamImg3 from '@/imges/team3.webp';
import teamImg4 from '@/imges/team4.webp';
import teamImg5 from '@/imges/team5.webp';
import teamImg6 from '@/imges/team6.webp';
import teamImg7 from '@/imges/team7.webp';
import Image from 'next/image';

const Teams = () => {
    const teamData = [
        {
            id: 1,
            teamImg: teamImg1,
        },
        {
            id: 2,
            teamImg: teamImg2,
        },
        {
            id: 3,
            teamImg: teamImg3,
        },
        {
            id: 4,
            teamImg: teamImg4,
        },
        {
            id: 5,
            teamImg: teamImg5,
        },
        {
            id: 6,
            teamImg: teamImg6,
        },
        {
            id: 7,
            teamImg: teamImg7,
        }
    ]

    return (
         <section data-aos="fade-up"  className='section py-20 transition-all'>
            <div className="container m-auto">
                <div className="flex items-center flex-col">
                    <div className="lg:w-1/2 text-center">
                        <h2 className='text-3xl mb-4 font-bold'>Integrate with all the tools your teams love using</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.</p>
                    </div>
                    <div className='text-center mt-20'>
                        {teamData?.map((img)=>{
                            return(
                                <div key={img.id} className='p-6 m-4 bg-white rounded-lg shadow-lg inline-block transition hover:-translate-y-1'>
                                    <Image src={img.teamImg} alt={`team${img.id}`} />
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teams;
