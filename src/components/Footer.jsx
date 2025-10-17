import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          Plus de façons de magasiner : Trouvez un Apple Store ou un autre revendeur près de chez vous. Ou appelez le 000800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. Tous droits réservés. Créé par Kemogne Malone.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
