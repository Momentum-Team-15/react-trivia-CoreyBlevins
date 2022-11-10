
export const Categories = ({ category, setSelectedId }) => {

    return(
        <div className="categories">
        {category.map((cat, idx) => (
            <div>
                <button key={idx} onClick={()=>{setSelectedId(cat.id)}}
                >id: {cat.id} {cat.name}</button>
            </div>
    ))}
        </div>
)}