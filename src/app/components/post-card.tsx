import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
    imageSrc: string;
    imageAlt: string;
    date: string;
    title: string;
    content: string;
    slug: string;
}

export default function PostCard({ 
    imageSrc, 
    imageAlt, 
    date, 
    title, 
    content,
    slug 
}: PostCardProps) {
    return (
        <div className="min-w-[350px] max-w-[425px] text-[#222] rounded-[15px] overflow-hidden">
            <Link href={`/blog/${slug}`} className="bg-[#eee]">
                <Image 
                    src={imageSrc}
                    alt={imageAlt}
                    width={5000}
                    height={3080}
                />
            </Link>
            <div className="pt-[10px]">
                <p>{date}</p>
                <h3 className="text-xl text-black uppercase mt-[5px] font-semibold">{title}</h3>
                <p>&quot;{content}&quot;</p>
            </div>
        </div>
    );
}
