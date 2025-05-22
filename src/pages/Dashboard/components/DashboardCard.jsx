export const DashboardCard = ({ order }) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 mb-5 border dark:border-slate-700 rounded lg:w-2/3">
            <div className="flex justify-between text-sm mb-4 font-bold dark:text-slate-200">
                <span>Order ID: {order.id}</span>
                <span>Total: ${order.total}</span>
            </div>

            <div className="flex flex-col gap-4">
                {order.items?.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 border-t border-slate-600 pt-4"
                    >
                        <img
                            className="w-24 h-24 object-cover rounded"
                            src={item.poster || "/placeholder.png"}
                            alt={item.name}
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-base font-medium dark:text-white">{item.name}</p>
                            {item.price && (
                                <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">${item.price}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
