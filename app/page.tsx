import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100 bg-mobile-pattern bg-contain bg-top bg-no-repeat md:bg-desktop-pattern">
      <section className="flex w-[90%] max-w-[327px] flex-col items-center gap-400 overflow-hidden rounded-[20px] bg-white shadow-card-1 md:max-w-[450px] md:gap-600">
        <Image
          src="/illustration-hero.svg"
          alt="Order Summary"
          width={500}
          height={500}
        />

        <div className="flex flex-col gap-300 md:gap-200">
          <div className="flex flex-col gap-200 px-400 text-center md:px-800">
            <h1 className="text-preset-2 text-blue-950 md:text-preset-1">
              Order Summary
            </h1>
            <p className="text-preset-4-medium text-gray-600 md:text-preset-3-medium">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>

          <div className="flex flex-col gap-300 px-300 pb-300 md:gap-400 md:px-600 md:pb-600">
            <div className="flex flex-row items-center rounded-[11px] bg-blue-50 p-200 md:p-300">
              <Image
                src="/icon-music.svg"
                alt="Icon music"
                width={48}
                height={48}
                className="mr-200"
              />
              <div className="flex-1">
                <p className="text-preset-4-black text-blue-950 md:text-preset-3-black">
                  Annual Plan
                </p>
                <p className="text-preset-4-medium text-gray-600 md:text-preset-3-medium">
                  $59.99/year
                </p>
              </div>
              <button className="cursor-pointer justify-end rounded-[11px] text-preset-4-bold text-blue-700 transition-colors duration-300 hover:text-purple-500 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:outline-none md:text-preset-3-bold">
                Change
              </button>
            </div>

            <div className="flex flex-col items-center gap-300 md:gap-400">
              <button className="w-full cursor-pointer rounded-[11px] bg-blue-700 px-[64px] py-[12px] text-preset-4-black text-white shadow-button transition-colors duration-300 hover:bg-purple-500 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:outline-none md:text-preset-3-black">
                Proceed to Payment
              </button>
              <button className="cursor-pointer rounded-[11px] text-preset-4-black text-gray-600 transition-colors duration-300 hover:text-blue-950 focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:outline-none md:text-preset-3-black">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
