import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'
import styles from './page.module.css'

const ARTISANS_DEMO = [
  { slug: 'vanille-bourbon',   name: 'Vanille Bourbon',    cat: 'Gastronomie', price: '18 €',  artisan: 'Domaine Ste-Anne',   color: '#e8dfc8' },
  { slug: 'chapeau-vacoa',     name: 'Chapeau Vacoa',      cat: 'Artisanat',   price: '65 €',  artisan: 'Atelier Creole',     color: '#ddd5c8' },
  { slug: 'tissage-creole',    name: 'Tissage Créole',     cat: 'Textile',     price: '120 €', artisan: 'Maison Babet',       color: '#c8d5dd' },
  { slug: 'piment-cabri',      name: 'Piment Cabri',       cat: 'Gastronomie', price: '12 €',  artisan: "Épices de l'île",    color: '#ddc8c8' },
  { slug: 'bijou-or-jaune',    name: 'Bijou Or Jaune',     cat: 'Bijoux',      price: '220 €', artisan: 'Créations Maillot',  color: '#f0e8c8' },
  { slug: 'broderie-malabar',  name: 'Broderie Malabar',   cat: 'Textile',     price: '85 €',  artisan: 'Atelier Sitarane',   color: '#d0c8e0' },
]

const CATEGORIES = ['Tout', 'Gastronomie', 'Artisanat', 'Textile', 'Bijoux', 'Art & Déco']

export default function CollectionPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <ScrollReveal>
          <p className="section-label">Savoir-faire réunionnais</p>
          <h1 className={styles.title}>
            NOS<br/>
            <span className={styles.titleScript}>artisans</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className={styles.intro}>
            Chaque pièce est créée à La Réunion par des artisans passionnés.<br/>
            Authentique, unique, fait main.
          </p>
        </ScrollReveal>
      </section>

      {/* Filtres */}
      <div className={styles.filters}>
        {CATEGORIES.map(f => (
          <button key={f} className={styles.filterBtn}>{f}</button>
        ))}
      </div>

      {/* Grille */}
      <section className={styles.grid}>
        {ARTISANS_DEMO.map((p, i) => (
          <ScrollReveal key={p.slug} delay={i * 0.06}>
            <a href={`/produit/${p.slug}`} className={styles.card}>
              <div className={styles.cardImg} style={{ background: p.color }}>
                <span className={styles.cardCatTag}>{p.cat}</span>
                <div className={styles.cardHover}><span>Voir le produit</span></div>
              </div>
              <div className={styles.cardInfo}>
                <div>
                  <p className={styles.cardName}>{p.name}</p>
                  <p className={styles.cardArtisan}>par {p.artisan}</p>
                </div>
                <p className={styles.cardPrice}>{p.price}</p>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </section>
    </>
  )
}
