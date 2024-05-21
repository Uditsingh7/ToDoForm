const FilterButtons = ({ setFilter }) => {
    return (
        <div>
            <button onClick={() => setFilter('all')}>
                All
            </button>
            <button onClick={() => setFilter('completed')}>
                Completed
            </button>
            <button onClick={() => setFilter('incompleted')}>
                Incompleted
            </button>
        </div>
    )
}

export default FilterButtons;