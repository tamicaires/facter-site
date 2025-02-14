import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface BenefitsCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  imgWidth?: number;
  imgHeight?: number;
}

export function BenefitsCard({
  title,
  description,
  image,
  imgHeight,
  imgWidth,
}: BenefitsCardProps) {
  return (
    <div className="overflow-hidden transition-all duration-300">
      <div className="space-y-6">
        <motion.div
          className="relative bg-gray-100 rounded-lg max-w-[384px] max-h-[384px] sm:min-w-[384px] sm:min-h-[384px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt="Dashboard Preview"
            width={imgWidth || 365}
            height={imgHeight || 370}
            className="rounded-lg w-full pt-8 pl-4 "
            priority
          />
        </motion.div>
        <div className="space-y-2 max-w-[384px]">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 pt-8">
            {title}
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
