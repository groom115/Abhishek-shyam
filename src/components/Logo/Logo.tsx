type LogoProps = {
  src: string
  alt: string
  height?: number | string
  width?: number | string
}

function Logo({ src, alt }: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: 28
      }}
    />
  )
}

export default Logo