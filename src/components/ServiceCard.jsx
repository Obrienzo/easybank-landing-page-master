

function ServiceCard({ index, icon, heading, description }) {
    return (
        <li key={index} className="flex flex-col items-center text-center max-w-80 sm:items-start sm:text-start">
            <div>
                <img src={icon} alt="icon" />
            </div>
            <div>
                <h3 className="my-4 text-xl text-DarkBlue">{heading}</h3>
                <p className="text-Grayishblue">{description}</p>
            </div>
        </li>
    );
}

export default ServiceCard;