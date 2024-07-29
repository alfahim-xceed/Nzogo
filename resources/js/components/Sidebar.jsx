const Sidebar = () => {
    return (
        <aside className="bg-gray-300 text-white min-h-screen p-4">
            <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-black">Menu</h2>
            <nav>
                <ul>
                    <li className="mb-2">
                        <a href="#overview" className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                            <span className="text-black dark:text-black">Overview</span>
                        </a>
                    </li>

                    <li className="mb-2">
                        <a href="#overview" className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                            <span className="text-black dark:text-black">Applied Visa</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#overview" className="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200">
                            <span className="text-black dark:text-black">Transactions</span>
                        </a>
                    </li>



                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;
