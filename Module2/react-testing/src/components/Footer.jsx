export const socialLogos = [
  {
    link: "http://github.com",
    src: "github",
    alt: "github",
  },
  {
    link: "http://linkedin.com",
    src: "linkedin",
    alt: "linkedin",
  },
  {
    link: "http://instagram.com",
    src: "instagram",
    alt: "instagram",
  },
];

const Footer = () => {
  return (
    <footer>
      <ul>
        {socialLogos.map((logo, index) => (
          <li key={index}>
            <a href={logo.link}>
              <img src={logo.src} alt={logo.alt} />
            </a>
          </li>
        ))}
      </ul>
      <p>
        Created with love by Mark Bodenchak <span role="img">🔨</span>
      </p>
    </footer>
  );
};

export default Footer;
