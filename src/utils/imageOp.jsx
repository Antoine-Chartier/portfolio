import React, { useState, useEffect } from 'react';


function getSource(src) {
  if (typeof src === 'string') return { fallback: src };
  return src;
}

const ImageOp = ({ src, alt}) => {
  const [sources, setSources] = useState(getSource(src));
    console.log(sources);
    console.log(alt);

  useEffect(() => {
    setSources(getSource(src));
  }, [src]);

  return (
    <picture>
      {sources.avif && <source srcSet={sources.avif} type="image/avif" alt={alt} />}
      {sources.webp && <source srcSet={sources.webp} type="image/webp" alt={alt} />}
      <img src={sources.fallback} alt={alt}  />
    </picture>
  );
};


export default ImageOp;