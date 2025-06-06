import Image from "next/image";
import Link from "next/link";

interface PostTemplateProps {
    title: string;
    subtitle: string;
    imagePath: string;
    learningPoints: string[];
    children: React.ReactNode;
}

export default function PostTemplate({
    title,
    subtitle,
    imagePath,
    learningPoints,
    children
}: PostTemplateProps) {
    return (
        <> 
            <section>
                <div className="max-w-[800px] mx-auto pt-[100px] pb-[50px] px-[15px]">
                    <div className="my-[50px] text-lg">
                        <p><Link href="/blog" className="text-[#555]">Blog</Link> &#62;</p>
                    </div>
                    <div>
                        <h1 className="text-4xl uppercase">{title}</h1>
                        <p className="font-semibold mt-[10px] mb-[25px] leading-[20px]">{subtitle}</p>
                        <div className="flex justify-start items-center gap-[15px]">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#111] text-white flex justify-center items-center text-xl">
                                C
                            </div>
                            <div>
                                <p className="font-semibold">Chris Bautt</p>
                                <p>CEO & Fundador de IntelliMind</p>
                            </div>
                        </div>
                        <div className="my-[50px] rounded-[15px] overflow-hidden">
                            <Image 
                                src={`/image-post/${imagePath}`} 
                                alt="Publication" 
                                className="w-full h-full object-cover" 
                                width={5000}
                                height={3080}
                            />
                        </div>
                        <div className="bg-[#f8f8f8] rounded-[15px] p-[25px] my-[50px]">
                            <p className="text-lg font-semibold mb-[10px] uppercase">En esta publicación aprenderás</p>
                            <ol className="list-decimal list-inside text-[#222] pl-[25px]">
                                {learningPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ol>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
