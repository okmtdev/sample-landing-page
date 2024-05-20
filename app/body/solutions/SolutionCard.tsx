import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface SolutionCardProps {
  icon: any;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className="h-5 w-5 text-purple-700" />
        <h2 className="ml-2 text-lg leading-6 font-bold">{title}</h2>
      </div>
      <p>{description}</p>
      <div className="flex justify-center mt-10">
        <Image src={imageSrc} alt={imageAlt} width={300} height={300} />
      </div>
    </div>
  );
};
