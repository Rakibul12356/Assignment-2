export default function Banner({ inProgressCount, resolvedCount }) {
    return (
        <div className="bg-gray-100 py-8 px-6">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* In Progress */}
                <div className="relative overflow-hidden rounded-xl p-10 flex flex-col items-center justify-center text-white bg-gradient-to-r from-[#632EE3] via-[#8047EA] to-[#9F62F2] min-h-[140px]">
                    <img src="/vector1.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none" />
                    <h3 className="relative text-base font-semibold mb-4 opacity-95">In-Progress</h3>
                    <p className="relative text-6xl font-bold">{inProgressCount}</p>
                </div>

                {/* Resolved */}
                <div className="rounded-xl p-10 flex flex-col items-center justify-center text-white bg-gradient-to-r from-[#41BE6C] via-[#2DAB70] to-[#00827A] min-h-[140px]">
                    <h3 className="text-base font-semibold mb-4 opacity-95">Resolved</h3>
                    <p className="text-6xl font-bold">{resolvedCount}</p>
                </div>
            </div>
        </div>
    );
}
