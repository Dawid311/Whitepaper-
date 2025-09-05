<template>
  <header class="whitepaper-header">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="@/assets/D.FAITH.png" alt="D.FAITH Token" class="logo-img" />
          <span class="logo-text">D.FAITH</span>
        </div>
        <div class="nav-cta">
          <button class="invest-btn">💎 Investieren - 5€/Token</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Simplified header for landing page
</script>

<style scoped>
.whitepaper-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar {
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.invest-btn {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #1a1a1a;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
}

.invest-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .invest-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
