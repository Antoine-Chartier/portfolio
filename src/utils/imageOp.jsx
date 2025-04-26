import React, { useState, useEffect } from 'react';


function getSource(src) {
  if (typeof src === 'string') return { fallback: src };
  return src;
}

const ImageOp = ({ src, alt, priority = false }) => {
  const [sources, setSources] = useState(getSource(src));
    console.log(sources);
    console.log(alt);
    console.log(priority);

  useEffect(() => {
    setSources(getSource(src));
  }, [src]);

  return (
    <picture>
      {sources.avif && <source srcSet={sources.avif} type="image/avif" alt={alt} />}
      {sources.webp && <source srcSet={sources.webp} type="image/webp" alt={alt} />}
      {priority ? <img src={sources.fallback} alt={alt} fetchpriority="high" loading="eager" /> : <img src={sources.fallback} alt={alt} />}
    </picture>
  );
};


export default ImageOp;