import TestImg from "../assets/images/test.jpg";

function ServiceCard() {
  return (
    <div className="service__card">
      <img src={TestImg} alt="" />
      <div className="service__card--bottom">
        <h2>Service Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          provident ut distinctio asperiores numquam praesentium aspernatur
          temporibus nihil eius et.
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
