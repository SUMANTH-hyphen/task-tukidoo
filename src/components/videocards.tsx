import { FC } from "react"

const VideoCard:FC<{src: string, name: string}> = ({src, name}) => {
    return (
        <div className=" h-16 w-48 md:h-48 md:w-full md:group md:relative">
            <img
                alt="Developer"
                src={`https://source.unsplash.com/${src}`}
                className="md:absolute inset-0 md:h-48 object-cover rounded-lg"
            />
            <div className=" hidden relative h-48 md:visible">
                <div className="bottom-0 left-0 absolute translate-y-2 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 bg-white rounded-tr-xl">
                    <p className="text-sm text-black py-1 px-2">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard