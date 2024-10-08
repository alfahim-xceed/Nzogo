import { Link } from "react-router-dom";

const PassportCard = () => {
    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-4 flex justify-between">
            <a href="#">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-dark">Passport Information</h5>
            </a>

            <Link to="/user/manage-passport">
                <div class="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Manage
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </div>
            </Link>
        </div>
    )
}

export default PassportCard;
