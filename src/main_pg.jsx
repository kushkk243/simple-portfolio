import PageCard from "./card";
import selfimg from "./assets/self.webp"

export default function Landing() {
    return (
        <PageCard content=
        {
        <div className="flex flex-col">
            <h1 className=" md:text-6xl lg:text-8xl sm:text-5xl text-center text-5xl content-center mb-10">Kush Kumar Kushwaha</h1>
            <h2 className="text-center text-2xl mb-10">Robotics Engineer| </h2>
            <div className="flex grid-cols-2 gap-8 h-full p-4 grow">
                <div>
                <img src={selfimg} className="rounded-[20px] w-auto h-auto"/>
                </div>
                <div>
                <p className="text-4xl text-justify h-full ">I am a robotics engineer with a passion for creating innovative solutions to complex problems. With a strong background in mechanical engineering and programming, I have experience in designing and building robots for various applications. I am always eager to learn new technologies and collaborate with like-minded individuals to push the boundaries of what is possible in the field of robotics.</p>
                </div>
            </div>
        </div>
        } paddingclass="p-2" sizeclass=" w-full h-full flex"/>
    )
}