import Image from "next/image";

interface ServiceHeroVisualProps {
  src: string;
  alt: string;
}

export default function ServiceHeroVisual({
  src,
  alt,
}: ServiceHeroVisualProps) {
  return (
    <div className="w-full lg:self-center">
      <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl bg-[var(--color-surface)]">
        <Image
          src={src}
          alt={alt}
          width={1254}
          height={1254}
          priority
          sizes="(min-width: 1280px) 500px, (min-width: 1024px) 38vw, (min-width: 640px) 560px, calc(100vw - 48px)"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
