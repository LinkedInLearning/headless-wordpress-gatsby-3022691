/**
 * Create a single component to handle internal and external links.
 * @link https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty/blob/master/src/components/UniversalLink.js
 */
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const UniversalLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  uri,
  ...other
}) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        uri={uri}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other} uri={uri}>
      {children}
    </a>
  );
};
export default UniversalLink;
