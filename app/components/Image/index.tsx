interface ImageProps {
    src: string;
    w: number;
    h: number;
    alt?: string;
    className?: string
  }
  
  
  export default function Image({src, w, h, className, alt}: ImageProps) {
    const aspectRatio = 100 * h / w / 100;
    const paddingBottom = `${aspectRatio * 100}%`;
    return (
      <div className={`lord-img${className? ` ${className}` : ""}`}>
        <div style={{ paddingBottom }} className="lord-img__placeholder"/>
        <img 
          src={src}
          width={`${w}px`}
          height={`${h}px`}
          alt={alt}
        />
      </div>
    )
  }