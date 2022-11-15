import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const SEO: React.FC<{
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}> = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  );
};

export default SEO;
