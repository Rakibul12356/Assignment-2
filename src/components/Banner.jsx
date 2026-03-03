export default function Banner({ inProgressCount, resolvedCount }) {
    return (
        <div className="bg-gray-100 py-8 px-6">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-6">
                {/* In Progress */}
                <div className="rounded-xl p-10 flex flex-col items-center justify-center text-white bg-gradient-to-br from-purple-500 to-purple-700 min-h-[140px]">
                    <h3 className="text-base font-semibold mb-4 opacity-95">In-Progress</h3>
                    <p className="text-6xl font-bold">{inProgressCount}</p>
                </div>

                {/* Resolved */}
                <div className="rounded-xl p-10 flex flex-col items-center justify-center text-white bg-gradient-to-br from-emerald-400 to-emerald-600 min-h-[140px]">
                    <h3 className="text-base font-semibold mb-4 opacity-95">Resolved</h3>
                    <p className="text-6xl font-bold">{resolvedCount}</p>
                </div>
            </div>
        </div>
    );
}
