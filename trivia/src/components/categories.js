
export const Categories = ({ category, setSelectedId }) => {

    return(
        <section className="box">
            <h2 className="title is-4 has-text-centered">Categories:</h2>
        <div className="grid">

        {category.map((cat, idx) => (
            <div className="block" key={idx}>
                <button className="categories button is-info" key={idx} onClick={()=>setSelectedId(cat.id)}
                >{cat.name}</button>
            </div>
    ))}
        </div>
        </section>
        
)}