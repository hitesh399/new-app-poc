import Image from "next/image";

export default function PublicLayout({children}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen dark:bg-gray-900 sm:p-0 lg:flex-row">
        {/* <!-- Form --> */}
        <div className="flex flex-col flex-1 w-full lg:w-1/2">
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div>
              <div className="mb-5 sm:mb-8">
                <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                  Sign In
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enter your email and password to sign in!
                </p>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>

        <div className="relative items-center hidden w-full h-full bg-brand-950 dark:bg-white/5 lg:grid lg:w-1/2">
          <div className="flex items-center justify-center z-1">
            <div className="flex flex-col items-center max-w-s">
              <a href="" className="block mb-4">
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                />
              </a>
              <p className=" text-gray-400 dark:text-white/60">
               

                <br />
                admin Credentials: any Email and password should be admin
                <br />
                user Credentials: any Email and password 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
