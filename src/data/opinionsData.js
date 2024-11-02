import opinion1 from "@/imges/op1.webp"
import opinion2 from "@/imges/op2.webp"

const opinions =[
    {
        name: 'John Doe',
        location: "Lynch, Marquardt",
        img:opinion1 ,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ipsum a velit ornare faucibus.',
    },
    {
        name: 'Jane Doe',
        location: "Maryville, Scott",
        img: opinion2 ,
        comment: 'Nulla facilisi. Sed ac mi non neque consectetur egestas.',
    },
    {
        name: 'Mike Doe',
        location: "Memphis, Tennessee",
        img: opinion1 ,
        comment: 'Duis in ipsum a velit ornare faucibus. Donec non sem vel ipsum iaculis consectetur.',
    }
]

const aboutOpinion ={
    name: 'Charles Dickens',
    location: "The Founder, Bigspring LLC",
    img:opinion1 ,
    comment: 'We’re changing how product managers, developers, and data scientists plan, track, and govern analytics across organizations. Before Avo, teams were forced to choose between product delivery speed and reliable insights.',
}

export default opinions;

export { aboutOpinion };