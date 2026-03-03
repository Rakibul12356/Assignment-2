export default function TaskStatus({ tasksInProgress, resolvedTasks, onComplete }) {
    return (
        <div className="flex flex-col gap-6">
            {/* Task Status */}
            <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">Task Status</h3>
                {tasksInProgress.length === 0 ? (
                    <p className="text-sm text-gray-400 mt-2">Select a ticket to add to Task Status</p>
                ) : (
                    <div className="flex flex-col gap-3 mt-3">
                        {tasksInProgress.map((task) => (
                            <div key={task.id} className="bg-white border border-gray-200 rounded-lg p-4">
                                <p className="text-sm font-medium text-gray-700 mb-3">{task.title}</p>
                                <button
                                    onClick={() => onComplete(task)}
                                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2 rounded-md transition cursor-pointer"
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Resolved Task */}
            <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">Resolved Task</h3>
                {resolvedTasks.length === 0 ? (
                    <p className="text-sm text-gray-400 mt-2">No resolved tasks yet.</p>
                ) : (
                    <div className="flex flex-col gap-2 mt-3">
                        {resolvedTasks.map((task) => (
                            <div key={task.id} className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                                <p className="text-sm font-medium text-gray-700">{task.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
