import ExCard from "../ExCard"

export default function ExCards(props) {
    const {experiences} = props
    return (
        <>
            {experiences.map(exp=><ExCard key={exp.id} exp={exp}/>)}
        </>
    )
}
