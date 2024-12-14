import Image from "next/image";

const ServiceCard = ({ icon:Icon, title, description }:any) => {
  return (
    <div className="service-card">
      <div className={`service-icon`} >
      <Image src={Icon.src} alt="icon" height={30} width={30} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;