<template>
  <div class="tokenomics-page">
    <section class="hero-tokenomics">
      <div class="container">
        <h1>Tokenomics</h1>
        <p>Detaillierte Analyse der D.FAITH und D.INVEST Token-Ökonomie</p>
      </div>
    </section>

    <section class="section token-distribution">
      <div class="container">
        <h2>Token-Verteilung</h2>
        
        <!-- D.FAITH Token Chart -->
        <div class="token-chart">
          <h3>D.FAITH Token (100.000 Tokens)</h3>
          <div class="chart-container">
            <div class="pie-chart">
              <div class="slice slice-1" data-percentage="80">
                <span>Smart Contract<br>80.000 (80%)</span>
              </div>
              <div class="slice slice-2" data-percentage="15">
                <span>Liquidität<br>15.000 (15%)</span>
              </div>
              <div class="slice slice-3" data-percentage="5">
                <span>Entwickler<br>5.000 (5%)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- D.INVEST Token Chart -->
        <div class="token-chart">
          <h3>D.INVEST Token (10.000 Tokens)</h3>
          <div class="invest-info">
            <div class="invest-stats">
              <div class="stat-box">
                <h4>Preis pro Token</h4>
                <span class="price">5 EUR</span>
              </div>
              <div class="stat-box">
                <h4>Gesamtwert</h4>
                <span class="price">50.000 EUR</span>
              </div>
              <div class="stat-box">
                <h4>Zweck</h4>
                <span class="purpose">D.FAITH freischalten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section halving-mechanism">
      <div class="container">
        <h2>Halving-Mechanismus</h2>
        <div class="halving-explanation">
          <p>
            Der Smart Contract verwendet einen Halving-Mechanismus zur kontrollierten Freigabe der D.FAITH Tokens. 
            Dieser Mechanismus stellt sicher, dass das Projekt Zeit hat zu wachsen, bevor große Mengen an Tokens 
            auf den Markt kommen.
          </p>
          
          <div class="halving-timeline">
            <div class="timeline-item">
              <div class="timeline-marker">1</div>
              <div class="timeline-content">
                <h4>Phase 1</h4>
                <p>Erste D.INVEST Verkäufe starten Freigabe-Prozess</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker">2</div>
              <div class="timeline-content">
                <h4>Phase 2</h4>
                <p>Halving-Ereignis reduziert Freigabe-Rate</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker">3</div>
              <div class="timeline-content">
                <h4>Phase 3</h4>
                <p>Weitere Reduzierung ermöglicht nachhaltiges Wachstum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section value-accrual">
      <div class="container">
        <h2>Wertschöpfungs-Mechanismen</h2>
        <div class="value-grid">
          <div class="value-item">
            <div class="value-icon">🎵</div>
            <h3>Musikeinnahmen</h3>
            <p>Streaming, Verkäufe und Performance-Einnahmen fließen in Token-Rückkäufe</p>
            <div class="value-flow">
              <span>Musik → Einnahmen → Token-Käufe → Wertsteigerung</span>
            </div>
          </div>
          
          <div class="value-item">
            <div class="value-icon">📱</div>
            <h3>Marketing-Budget</h3>
            <p>Fan-Engagement löst automatische Token-Käufe für Belohnungen aus</p>
            <div class="value-flow">
              <span>Engagement → Budget → Token-Käufe → Fan-Belohnungen</span>
            </div>
          </div>
          
          <div class="value-item">
            <div class="value-icon">🚀</div>
            <h3>Community-Wachstum</h3>
            <p>Wachsende Community zieht neue Investoren und Fans an</p>
            <div class="value-flow">
              <span>Community → Nachfrage → Token-Käufe → Werterhöhung</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section economic-model">
      <div class="container">
        <h2>Ökonomisches Modell</h2>
        <div class="model-explanation">
          <h3>Nachhaltiger Kreislauf</h3>
          <p>
            Das D.FAITH Ökosystem schafft einen nachhaltigen Wirtschaftskreislauf, der allen Beteiligten zugute kommt:
          </p>
          
          <div class="cycle-diagram">
            <div class="cycle-step">
              <h4>🎤 Künstler</h4>
              <p>Erhält authentisches Engagement ohne teure Ads</p>
            </div>
            <div class="cycle-arrow">→</div>
            <div class="cycle-step">
              <h4>👥 Fans</h4>
              <p>Werden direkt für Engagement belohnt</p>
            </div>
            <div class="cycle-arrow">→</div>
            <div class="cycle-step">
              <h4>💰 Investoren</h4>
              <p>Profitieren von Projektwachstum</p>
            </div>
            <div class="cycle-arrow">→</div>
            <div class="cycle-step">
              <h4>📈 Wertsteigerung</h4>
              <p>Token-Wert steigt durch Nachfrage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Tokenomics page for D.FAITH Ecosystem
</script>

<style scoped>
.tokenomics-page {
  padding-top: 80px;
  min-height: 100vh;
}

.hero-tokenomics {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.hero-tokenomics h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section {
  padding: 4rem 0;
  background: white;
}

.section:nth-child(even) {
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.token-chart {
  margin: 3rem 0;
  text-align: center;
}

.token-chart h3 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.chart-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.pie-chart {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(
    #667eea 0% 80%,
    #764ba2 80% 95%,
    #e74c3c 95% 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.invest-info {
  display: flex;
  justify-content: center;
}

.invest-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
}

.stat-box {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-box h4 {
  color: #666;
  margin-bottom: 1rem;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
}

.purpose {
  font-size: 1.2rem;
  color: #2c3e50;
}

.halving-timeline {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  position: relative;
}

.halving-timeline::before {
  content: '';
  position: absolute;
  top: 25px;
  left: 50px;
  right: 50px;
  height: 2px;
  background: #667eea;
  z-index: 1;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.timeline-marker {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.timeline-content {
  text-align: center;
  max-width: 200px;
}

.timeline-content h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.value-item {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.value-flow {
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 5px;
  font-style: italic;
  color: #666;
}

.cycle-diagram {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0;
}

.cycle-step {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 200px;
}

.cycle-step h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.cycle-arrow {
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
}

@media (max-width: 768px) {
  .halving-timeline {
    flex-direction: column;
    gap: 2rem;
  }
  
  .halving-timeline::before {
    display: none;
  }
  
  .cycle-diagram {
    flex-direction: column;
  }
  
  .cycle-arrow {
    transform: rotate(90deg);
  }
  
  .pie-chart {
    width: 250px;
    height: 250px;
  }
}
</style>
