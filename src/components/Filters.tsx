type Filter = {
    id: string
    label: string
    active?: boolean
}

const Filters = ({ filters }: { filters: Filter[] }) => {

    return (
        <div className="flex flex-shrink gap-1 sm:gap-2">
            {filters.map((filter, i) => (
                <div key={i}>
                    <input type="checkbox" name={filter.id} id={filter.id} className="peer hidden" checked={filter.active} />
                    <label htmlFor={filter.id} className="cursor-pointer select-none peer-checked:scale-95 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-xs px-3 py-2 peer-checked:bg-black peer-checked:text-white">
                        {filter.label}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default Filters
