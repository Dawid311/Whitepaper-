<template>
  <footer class="whitepaper-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>D.FAITH Ökosystem</h3>
          <p>Revolutionäre Token-basierte Community-Plattform für Musikfans</p>
        </div>
        <div class="footer-section">
          <h4>Kontakt</h4>
          <p>Email: info@dfaith.com</p>
          <p>Website: www.dfaith.com</p>
        </div>
        <div class="footer-section">
          <h4>Social Media</h4>
          <div class="social-links">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">TikTok</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Spotify</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 D.FAITH Ökosystem. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.whitepaper-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #ecf0f1;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #2980b9;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #95a5a6;
}

@media (max-width: 768px) {
  .footer-container {
    padding: 2rem 1rem 1rem;
  }
  
  .social-links {
    flex-direction: column;
  }
}
</style>
