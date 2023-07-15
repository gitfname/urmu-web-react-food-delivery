
function Loading_1() {
    return (
        <div className="w-full h-screen grid place-items-center bg-[--primary-color]">
            <div className="w-max p-8 rounded-xl bg-white/20">
                <p className="text-lg font-[vazir] text-center text-gray-50">در حال بارگذاری</p>
                <div className="w-9 h-9 mx-auto mt-4 rounded-full border-t border-t-gray-50  animate-spin animate-duration-1000"></div>
            </div>
        </div>
    )
}

export default Loading_1