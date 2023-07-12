
import getBaseUrl from "../../utils/base-url"

function PreLogin() {
    return (
        <div
            className="w-full h-screen p-4 md:p-8 flex flex-col items-center justify-center gap-y-5 bg-[--primary-color]"
        >

            <div
                className="w-48 aspect-square rounded-3xl shadow-lg shadow-black/10 overflow-hidden rotate-45"
            >
                <img
                    alt=""
                    src={getBaseUrl() + "/images/image-1.png"}
                    className="w-full h-full object-center object-cover -rotate-45 scale-150"
                />
            </div>


            <p
                className="text-lg mt-9 text-gray-50 text-center font-[vazirMedium]"
            >
                تجربه خرید غذا سریع تر از همیشه
            </p>

            <p
                className="text-sm text-white/80 max-w-[45ch] text-center font-[vazir]"
            >
                بهترین و با کیفیت ترین فست فود ها را با ما تجربه کنید
            </p>

            <button className="mt-3.5 primary-btn bg-[--primary-color-darker] w-full max-w-[12rem] font-[vazir]">
                اکانت بسازید
            </button>

            <button
                className="text-xs text-gray-100 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 px-3.5
            active:scale-95 font-[vazir]"
            >
                از قبل اکانت دارید ؟
            </button>

        </div>
    )
}

export default PreLogin
