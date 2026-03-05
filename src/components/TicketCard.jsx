export default function TicketCard({ ticket, onSelect }) {
    const priorityStyles = {
        'HIGH PRIORITY': 'text-[#F83044] ',
        'MEDIUM PRIORITY': 'text-[#FEBB0C] ',
        'LOW PRIORITY': 'text-[#02A53B] ',
    };

    const statusStyles = {
        Open: 'text-[#02A53B] bg-[#B9F8CF]',
        'In-Progress': 'text-[#FEBB0C] bg-[#F8F3B9]',
        Resolved: 'text-blue-700 bg-blue-100',
    };

    return (
        <div
            onClick={() => onSelect(ticket)}
            className="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
            {/* Header */}
            <div className="flex justify-between items-start gap-3 mb-2">
                <h4 className="text-sm font-semibold text-gray-800 flex-1 leading-snug">{ticket.title}</h4>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1 ${statusStyles[ticket.status]}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current inline-block"></span>
                    {ticket.status}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{ticket.description}</p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-3 border-t border-gray-100 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-medium">{ticket.id}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${priorityStyles[ticket.priority]}`}>
                        {ticket.priority}
                    </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{ticket.customer}</span>
                    <span className="flex items-center gap-1 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {ticket.createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
}
