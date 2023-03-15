const Pagination = () => {
    return (
        <nav aria-label="Segments navigation">
            <ul className="inline-flex -space-x-px">
                <li>
                    <a className="text-xs select-none cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">Précendent</a>
                </li>
                <li>
                    <a className="text-xs select-none cursor-pointer px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">1</a>
                </li>
                <li>
                    <a className="text-xs select-none cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                    <a className="text-xs select-none cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</a>
                </li>
                <li>
                    <a className="text-xs select-none cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                </li>
                <li>
                    <a className="text-xs select-none cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                </li>
                <li>
                    <a className="text-xs select-none cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Suivant</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination