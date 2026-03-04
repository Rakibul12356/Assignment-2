import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import ticketsData from './data/tickets';

function App() {
    const [tickets, setTickets] = useState(ticketsData);
    const [tasksInProgress, setTasksInProgress] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    const handleSelectTicket = (ticket) => {
        const alreadyAdded = tasksInProgress.some((t) => t.id === ticket.id);
        if (alreadyAdded) {
            toast.warning(`"${ticket.title}" is already in Task Status!`);
            return;
        }
        setTasksInProgress([...tasksInProgress, ticket]);
        toast.success(`Added to Task Status: ${ticket.title}`);
    };

    const handleCompleteTask = (task) => {
        setTasksInProgress(tasksInProgress.filter((t) => t.id !== task.id));
        setResolvedTasks([...resolvedTasks, task]);
        setTickets(tickets.filter((t) => t.id !== task.id));
        toast.success(`Task completed: ${task.title}`);
    };

    const handleNewTicket = () => {
        toast.info('New Ticket feature coming soon!');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar onNewTicket={handleNewTicket} />
            <Banner inProgressCount={tasksInProgress.length} resolvedCount={resolvedTasks.length} />

            {/* Main Section */}
            <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
                    {/* Left: Ticket Cards */}
                    <div className="">
                        <h2 className="text-lg font-semibold text-gray-800 mb-5 pb-4">
                            Customer Tickets
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tickets.map((ticket) => (
                                <TicketCard key={ticket.id} ticket={ticket} onSelect={handleSelectTicket} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Task Status */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200 h-fit lg:sticky lg:top-20">
                        <TaskStatus
                            tasksInProgress={tasksInProgress}
                            resolvedTasks={resolvedTasks}
                            onComplete={handleCompleteTask}
                        />
                    </div>
                </div>
            </main>

            <Footer />
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
}

export default App;
