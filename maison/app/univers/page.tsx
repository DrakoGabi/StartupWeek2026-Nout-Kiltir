import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'
import styles from './page.module.css'

export default function UniversPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <ScrollReveal>
          <p className="section-label">Notre histoire</p>
          <h1 className={styles.title}>
            NOUT&apos;<br/>
            <span className={styles.titleScript}>kiltir</span>
          </h1>
        </ScrollReveal>
        <div className={styles.heroImg} />
      </section>

      {/* Histoire */}
      <section className={styles.story}>
        <ScrollReveal>
          <p className={styles.storyLead}>
            Née d&apos;une conviction simple : la culture réunionnaise mérite d&apos;être partagée 
            avec le monde entier. Nout&apos; Kiltir, c&apos;est "Notre Culture" en créole réunionnais.
          </p>
        </ScrollReveal>
        <div className={styles.storyGrid}>
          <ScrollReveal delay={0.1}>
            <p className={styles.storyText}>
              Fondée à Saint-Leu de La Réunion, notre plateforme réunit artistes, producteurs
              et créateurs locaux. Chaque produit vendu représente des heures de savoir-faire,
              des générations de tradition, une île qui vibre.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={styles.storyText}>
              Nous reversons 5% de chaque vente à des associations culturelles réunionnaises.
              Acheter sur Nout&apos; Kiltir, c&apos;est soutenir directement l&apos;île et ses habitants.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs avec couleurs */}
      <section className={styles.valeurs}>
        <ScrollReveal>
          <p className="section-label">Ce en quoi nous croyons</p>
          <h2 className={styles.valeursTitle}>NOS VALEURS</h2>
        </ScrollReveal>
        <div className={styles.valeursGrid}>
          {[
            { num: '01', titre: 'Authenticité', texte: 'Uniquement des produits créés à La Réunion, par des Réunionnais.', color: 'var(--color-accent)' },
            { num: '02', titre: 'Équité',       texte: 'Nos artisans reçoivent 80% du prix de vente. Toujours.', color: 'var(--color-accent-blue)' },
            { num: '03', titre: 'Culture',      texte: 'Chaque produit est accompagné de l\'histoire qui le porte.', color: 'var(--color-accent-yellow)' },
          ].map(v => (
            <ScrollReveal key={v.num} delay={0.1}>
              <div className={styles.valeur} style={{ borderTopColor: v.color }}>
                <span className={styles.valeurNum} style={{ color: v.color }}>{v.num}</span>
                <h3 className={styles.valeurTitre}>{v.titre}</h3>
                <p className={styles.valeurTexte}>{v.texte}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className={styles.cta}>
        <ScrollReveal>
          <p className="section-title-script" style={{ marginBottom: '2rem', display: 'block' }}>
            Prêt à découvrir l&apos;île ?
          </p>
          <Button href="/boutique">Explorer nos services</Button>
        </ScrollReveal>
      </div>
    </>
  )
}
