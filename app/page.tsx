import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100 bg-mobile-pattern bg-contain bg-top bg-no-repeat md:bg-desktop-pattern">
      <section className="flex w-[90%] max-w-[327px] flex-col items-center gap-400 overflow-hidden rounded-[20px] bg-white shadow-card-1">
        <Image
          src="/illustration-hero.svg"
          alt="Order Summary"
          width={500}
          height={500}
        />

        <div className="flex flex-col gap-300">
          <div className="flex flex-col gap-200 px-400 text-center">
            <h1 className="text-preset-2 text-blue-950">Order Summary</h1>
            <p className="text-preset-4-medium text-gray-600">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>

          <div className="flex flex-col gap-300 px-300 pb-300">
            <div className="flex flex-row items-center rounded-[11px] bg-blue-50 p-200">
              <Image
                src="/icon-music.svg"
                alt="Icon music"
                width={48}
                height={48}
                className="mr-200"
              />
              <div className="flex-1">
                <p className="text-preset-4-black text-blue-950">Annual Plan</p>
                <p className="text-preset-4-medium text-gray-600">
                  $59.99/year
                </p>
              </div>
              <p className="cursor-pointer justify-end text-preset-4-bold text-blue-700 hover:text-purple-500">
                Change
              </p>
            </div>

            <div className="flex flex-col items-center gap-300">
              <button className="w-fit cursor-pointer rounded-[11px] bg-blue-700 px-[64.5px] py-[12.5px] text-preset-4-black text-white shadow-button hover:bg-purple-500">
                Proceed to Payment
              </button>
              <button className="cursor-pointer text-preset-4-black text-gray-600 hover:text-blue-950">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
