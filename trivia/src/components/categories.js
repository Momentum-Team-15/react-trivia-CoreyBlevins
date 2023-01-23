import { useState } from 'react';

export const Categories = ({ category, setSelectedId, difficulty, setDifficulty, error }) => {
    const [open, setOpen] = useState(false)

    return(
        <section className="box">
            <div className="is-flex is-justify-content-space-between">
            <div className="dropdown">
                <button className="button is-link" onClick={()=>setOpen(!open)}>Difficulty</button>
            {open && (
                <ul className="box menu">
                    <li className="menu-item">
                        <button className="button is-success" onClick={()=>{setDifficulty("easy"); setOpen(false)}}>Easy</button>
                    </li>
                    <li className="menu-item">
                        <button className="button is-warning" onClick={()=>{setDifficulty("medium"); setOpen(false)}}>Medium</button>
                    </li>
                    <li className="menu-item">
                        <button className="button is-danger" onClick={()=>{setDifficulty("hard"); setOpen(false)}}>Hard</button>
                    </li> 
                    <li className="menu-item">
                        <button className="button is-black" onClick={()=>{setDifficulty(""); setOpen(false)}}>Random</button>
                    </li>
                </ul>
            )}
            </div>
            
            {error && <p>Sorry, not enough questions in that difficulty.</p>}
            <p>Difficulty: {difficulty} {difficulty === "" && "random"}</p>
            </div>


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