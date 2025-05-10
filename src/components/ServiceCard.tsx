type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  onButtonClick?: () => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="service__card">
      <img src={image} className="card__img" alt={title} width={200} />
      <div className="service__card--bottom">
        <div className="card__info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button className="button service__card--btn" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
