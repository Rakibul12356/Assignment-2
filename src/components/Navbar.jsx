export default function Navbar({ onNewTicket }) {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <h2 className="text-xl font-bold text-gray-800">CS — Ticket System</h2>

                {/* Menu + Button */}
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center gap-6 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-gray-800 transition">Home</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">Changelog</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">Download</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">Contact</a></li>
                    </ul>
                    <button
                        onClick={onNewTicket}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition cursor-pointer"
                    >
                        + New Ticket
                    </button>
                </div>
            </div>
        </nav>
    );
}
