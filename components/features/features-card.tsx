import React from "react";
import { motion } from "framer-motion";

export type FeaturesCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FeaturesCard({ title, description, icon }: FeaturesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-4 max-w-[497px]"
    >
      <div className="flex items-start gap-4">
        <div className="flex-none rounded-lg bg-primary/10 p-3">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
