import Image from "next/image";
import Link from "next/link";

type Props = {}

function Banner({ }: Props) {
    return (
        <div className="hero h-fit min-h-[60vh] sm:min-h-[75vh] md:min-h-[66vh] bg-base-200 max-width min-w-[300px]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                <div className="w-full sm:w-[75%] lg:w-[48%] min-w-sm rounded-lg shadow-2xl overflow-hidden">
                    <Image 
                        alt='banner' 
                        src="/images/banner003.jpg" 
                        width={600}  
                        height={400} 
                        layout="responsive" 
                    />
                </div>
                <div className="w-full sm:w-[80%] lg:w-[48%] text-center lg:text-left">
                    <h1 className="text-2xl md:text-5xl font-bold">Box Office News!</h1>
                    <p className="py-2 lg:py-6 text-sm md:text-base">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link href='/admission-process' className="link-btn">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;