import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar'

export const NoteApp = () => {
  return (
    <>
    <Navbar/>
    <div className="relative">
    <section className="bg-yellow-50 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="relative flex items-center justify-center text-white w-full lg:order-2 lg:w-7/12 bg-[#111827]">
                <div className="absolute bottom-0 right-0 hidden lg:block">
                    <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                </div>

                <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                    <h1 className="text-4xl font-bold  sm:text-6xl xl:text-8xl">
                        Get it done.<br />
                        Fast, Easy.
                    </h1>
                    <p className="mt-8 text-xl">We help you to make your work life easier. Build a your Notes Gallery working for Free.</p>

                    <div className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                        <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                            <div className="flex flex-col items-start sm:flex-row">
                                <div className="flex-1 w-full min-w-0">
                                    <div className="relative text-gray-400 focus-within:text-gray-600">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter email to get started"
                                            className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                        />
                                    </div>
                                </div>

                                <button className=" cursor-pointerinline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                                    <Link to="/login" className="z-40">Try 14 days free</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 text-base">Instant access . No credit card required</p>
                </div>

                <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                    <img className="w-32 h-32 md:w-40 md:h-40 invert" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png" alt="" />
                </div>
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg" alt="" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0">
                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center">
                            <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                        </div>
                        <p className="max-w-xs mt-1.5 text-xl text-white">Professionals have organized their desk via PostCra</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

    </>
  )
}
