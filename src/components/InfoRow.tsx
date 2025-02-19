const InfoRow = ({ title, value }) => {
    return (
        <div className="flex flex-col">
            <span className="text-md text-gray-500 font-medium">{title}</span>
            <span className="text-md text-gray-800">{value}</span>
        </div>
    );
};

export default InfoRow;