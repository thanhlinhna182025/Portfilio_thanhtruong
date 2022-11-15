import './card.css'
const Card = ({ emoji, heading, detail }) => {
    return (
        <div className="card">
            <img src={emoji} alt="emoji like" />
            <h4>{heading}</h4>
            <span>{detail}</span>
            <button className="button c-button">Read More</button>
        </div>
    )
}

export default Card
