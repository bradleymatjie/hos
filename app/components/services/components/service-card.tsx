import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
    icon: string | StaticImageData; // Type for a React component passed as an icon
    title: string;
    description: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service-card" data-aos="zoom-in">
      <div className={`service-icon`} >
      <Image src={icon} alt="icon" height={30} width={30} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;