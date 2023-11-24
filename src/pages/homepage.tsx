import { useState } from "react"
import SVGcall from "../assets/SVGcall"
import SVGsupport from "../assets/SVGsupport"
import BackButton from "../components/backbutton"
import VideoCard from "../components/videocards"
import SVGCam from "../assets/SVGCam"
import SVGMic from "../assets/SVGMic"
import SVGShare from "../assets/SVGShare"
import SVGChat from "../assets/SVGChat"
import ErrorPage from "./Errorpage"

const Home = () => {

    const [currentTab, setCurrentTab] = useState(3)

    return (
        <div className="mt-2 flex flex-col gap-2 md:gap-5">
            <div id="a-top" className="flex justify-between items-center">
                <div className="flex gap-3">
                    <div id="b-back" className=""><BackButton /></div>
                    <div id="b-Title" className="text-lg font-bold md:text-3xl ">Basic Mathematics 101</div>
                </div>
                <div id="b-last" className="hidden md:visible md:flex gap-5">
                    <div className="flex gap-2 items-center font-bold"><SVGcall /> Call Teacher</div>
                    <div className="flex gap-2 items-center font-bold"><SVGsupport /> Support</div>
                </div>
            </div>

            <div id="a-tabs" className="">
                <div className="flex">
                    <div className="flex bg-gray-100 rounded-lg transition p-1 w-full">
                        <nav className="flex overflow-x-scroll" aria-label="Tabs" role="tablist">
                            <button onClick={() => setCurrentTab(1)} type="button" className={`hs-tab-active:bg-white px-2 py-2 md:py-3 md:px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-800 hover:text-gray-700 font-medium rounded-lg hover:hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none ${currentTab === 1 ? 'active' : ''}`} id="segment-item-1" data-hs-tab="#segment-1" aria-controls="segment-1" role="tab">
                                Classroom
                            </button>
                            <button onClick={() => setCurrentTab(2)} type="button" className={`hs-tab-active:bg-white px-2 py-2 md:py-3 md:px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-800 hover:text-gray-700 font-medium rounded-lg hover:hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none ${currentTab === 2 ? 'active' : ''}`} id="segment-item-2" data-hs-tab="#segment-2" aria-controls="segment-2" role="tab">
                                Whiteboard
                            </button>
                            <button onClick={() => setCurrentTab(3)} type="button" className={`hs-tab-active:bg-white px-2 py-2 md:py-3 md:px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-800 hover:text-gray-700 font-medium rounded-lg hover:hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none ${currentTab === 3 ? 'active' : ''}`} id="segment-item-3" data-hs-tab="#segment-3" aria-controls="segment-3" role="tab">
                                Videos
                            </button>
                            <button onClick={() => setCurrentTab(4)} type="button" className={`hs-tab-active:bg-white px-2 py-2 md:py-3 md:px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-800 hover:text-gray-700 font-medium rounded-lg hover:hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none ${currentTab === 4 ? 'active' : ''}`} id="segment-item-4" data-hs-tab="#segment-4" aria-controls="segment-4" role="tab">
                                Slide 
                            </button>
                            <button onClick={() => setCurrentTab(5)} type="button" className={`hs-tab-active:bg-white px-2 py-2 md:py-3 md:px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-800 hover:text-gray-700 font-medium rounded-lg hover:hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none ${currentTab === 5 ? 'active' : ''}`} id="segment-item-5" data-hs-tab="#segment-5" aria-controls="segment-5" role="tab">
                                Documents
                            </button>
                            <button onClick={() => setCurrentTab(6)} type="button" className={`hs-tab-active:bg-white px-2 py-2 md:py-3 md:px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-800 hover:text-gray-700 font-medium rounded-lg hover:hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none ${currentTab === 6 ? 'active' : ''}`} id="segment-item-6" data-hs-tab="#segment-6" aria-controls="segment-6" role="tab">
                                Doc.Cam
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="py-6 md:px-1 md:py-8">
                    <div className={`${currentTab !== 1 ? "hidden" : ""}`} id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
                        <ErrorPage />
                    </div>
                    <div className={`${currentTab !== 2 ? "hidden" : ""}`} id="segment-2" role="tabpanel" aria-labelledby="segment-item-2">
                        <ErrorPage />
                    </div>
                    <div className={`${currentTab !== 3 ? "hidden" : ""}`} id="segment-3" role="tabpanel" aria-labelledby="segment-item-3">

                        <div id="a-body" className="flex flex-col-reverse gap-3 h-max md:flex md:flex-row">
                            <div id="b-cam" className="w-full gap-24 flex flex-col md:w-3/12 md:gap-5">
                                <div id="c-cam" className="flex flex-col gap-20 md:flex md:flex-col md:gap-10">
                                    <VideoCard src="a-little-girl-sitting-at-a-table-with-a-laptop-w9i7wMaM3EE" name="Ridha" />
                                    <VideoCard src="boy-in-gray-shirt-using-black-laptop-computer-6MePtA9EVDA" name="Mr. Kaur" />
                                </div>
                                <div id="c-controls" className="grid gap-y-2 px-10 md:grid-cols-4 grid-rows-2 md:gap-y-5 md:px-5">
                                    <div >
                                        <SVGCam />
                                    </div>
                                    <div >
                                        <SVGMic />
                                    </div>
                                    <div >
                                        <SVGChat />
                                    </div>
                                    <div >
                                        <SVGShare />
                                    </div>
                                    <div className=" col-start-2 col-span-2">
                                        <button type="button" className="py-3 px-7 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-50 text-black hover:bg-blue-100 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Leave
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 29.5 42 C 32.519774 42 35 39.519774 35 36.5 A 1.50015 1.50015 0 1 0 32 36.5 C 32 37.898226 30.898226 39 29.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 29.5 9 C 30.898226 9 32 10.101774 32 11.5 A 1.50015 1.50015 0 1 0 35 11.5 C 35 8.4802259 32.519774 6 29.5 6 L 11.5 6 z M 33.484375 15.484375 A 1.50015 1.50015 0 0 0 32.439453 18.060547 L 36.878906 22.5 L 15.5 22.5 A 1.50015 1.50015 0 1 0 15.5 25.5 L 36.878906 25.5 L 32.439453 29.939453 A 1.50015 1.50015 0 1 0 34.560547 32.060547 L 41.560547 25.060547 A 1.50015 1.50015 0 0 0 41.560547 22.939453 L 34.560547 15.939453 A 1.50015 1.50015 0 0 0 33.484375 15.484375 z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div id="b-video" className="w-full md:w-9/12 ">
                                <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/fr04p6Ar9ic?si=WQOSSXzrPb6X7Yt5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>

                    </div>
                    <div className={`${currentTab !== 4 ? "hidden" : ""} h-20`} id="segment-4" role="tabpanel" aria-labelledby="segment-item-4">
                        <ErrorPage />
                    </div>
                    <div className={`${currentTab !== 5 ? "hidden" : ""}`} id="segment-5" role="tabpanel" aria-labelledby="segment-item-5">
                        <ErrorPage />
                    </div>
                    <div className={`${currentTab !== 6 ? "hidden" : ""}`} id="segment-6" role="tabpanel" aria-labelledby="segment-item-6">
                        <ErrorPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home