export default function App (button, linea, bob) {
    const d = document;

    d.addEventListener(`click`, (e) => {
        if(e.target.matches(button) || e.target.matches(linea)){
            d.querySelector(`nav`).style.display = `flex`;
        } 
        
        if(e.target.matches(bob)){
            d.querySelector(`nav`).style.display = `none`;
        }
    })
}
