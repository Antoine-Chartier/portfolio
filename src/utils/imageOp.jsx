import React, { useState, useEffect } from 'react';


function getSource(src) {
  if (typeof src === 'string') return { fallback: src };
  return src;
}

const ImageOp = ({ src }) => {
  const [sources, setSources] = useState(getSource(src));
    console.log(sources);

  useEffect(() => {
    setSources(getSource(src));
  }, [src]);

  return (
    <picture>
      {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
      {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
      <img src={sources.fallback} alt="" />
    </picture>
  );
};


export default ImageOp;