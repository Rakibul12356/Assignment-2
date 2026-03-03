export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-gray-400 pt-12 pb-6 mt-10">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-gray-700">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white text-lg font-bold mb-4">CS — Ticket System</h3>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Information</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-4">Social Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold">𝕏</span>
                                <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold">in</span>
                                <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold">f</span>
                                <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold">✉</span>
                                <a href="#" className="hover:text-white transition">support@cst.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    &copy; 2025 CS — Ticket System. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
