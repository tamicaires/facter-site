type SectionTitleType = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleType) {
  return (
    <p
      className={`mt-4 text-4xl font-bold tracking-tight text-gray-900 text-left ${className}`}
    >
      {children}
    </p>
  );
}
