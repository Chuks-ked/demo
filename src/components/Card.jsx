const Card = ({ title, description, isFeatured }) => {
    return (
      <div className={`max-w-sm rounded overflow-hidden shadow-lg p-6 m-4 ${isFeatured ? 'bg-yellow-100' : 'bg-yellow-800'}`}>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default Card;