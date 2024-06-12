import Image from "next/image";

type HeroImageProps = {
    account: string | undefined;
    onConnect: () => void;
};

export default function HeroImage({ account, onConnect } : HeroImageProps) {
    return(
        <div className="relative w-full h-[350px]">
            <Image
                src="/images/hero-image.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute"/>
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-stone-50">
                <div className="text-3xl font-bold tracking-widest text-center">普段を彩るNFT</div>
                {!account && (
                    <div
                        className={"mt-3 btn btn-wide"}
                        onClick={onConnect}>
                        ウォレットを接続してはじめる
                    </div>
                )}
            </div>
        </div>
    )
}