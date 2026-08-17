interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
          light ? 'text-white' : 'text-[#012B4E]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
