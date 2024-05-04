import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>Kadir Levent Kabadayi</span>. All Rights Reseved
        </strong>
      </div>
      <div className="credits">
        Designed by <a href="https://github.com/Kadirleventkabadayi">Levent</a>
      </div>
    </footer>
  );
}

export default Footer;
