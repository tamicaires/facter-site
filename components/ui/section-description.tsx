type SectionDescriptionType = {
  children: React.ReactNode;
  className?: string;
};

export function SectionDescription({
  children,
  className,
}: SectionDescriptionType) {
  return (
    <p
      className={`mt-3 text-[18px] tracking-tight text-gray-500 text-left ${className}`}
    >
      {children}
    </p>
  );
}
