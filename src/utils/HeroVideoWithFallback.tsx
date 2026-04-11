"use client";

type Props = {
  mp4Url: string;
  webmUrl?: string;
  posterImage?: string;
  className?: string;
  overlayClassName?: string;
};

export default function HeroVideoWithFallback({
  mp4Url,
  webmUrl,
  posterImage,
  className = "",
  overlayClassName,
}: Props) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterImage}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      >
        {webmUrl ? <source src={webmUrl} type="video/webm" /> : null}
        <source src={mp4Url} type="video/mp4" />
      </video>

      {overlayClassName ? (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      ) : null}
    </div>
  );
}

