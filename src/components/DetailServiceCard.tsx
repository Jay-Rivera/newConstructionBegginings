// DetailServiceCard.tsx
import React from "react";

type DetailServiceCardProps = {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  onButtonClick?: () => void; // Optional click handler
};

const DetailServiceCard: React.FC<DetailServiceCardProps> = ({
  title,
  description,
  image,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="service">
      <img src={image} alt={title} width={200} />
      <div className="service__description">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onButtonClick}>{buttonLabel}</button>
      </div>
    </div>
  );
};

export default DetailServiceCard;
