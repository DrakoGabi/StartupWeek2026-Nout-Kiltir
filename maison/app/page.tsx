import Image from 'next/image'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Button from '@/components/ui/Button'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
      {/* ==========================================
          HERO
      =========================================== */}
      <section className={styles.hero}>

        {/* IMAGE HERO — illustration ancienne Réunion avec barque */}
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-vintage.jpg"
            alt="Île de la Réunion"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          {/* Overlay pour lisibilité du texte */}
          <div className={styles.heroBgOverlay} />
        </div>

        {/* Grain texture */}
        <div className={styles.heroGrain} />

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>La Réunion, île intense</p>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleNout}>NOUT&apos;</span>
            <span className={styles.heroTitleKiltir}>kiltir</span>
          </h1>

          <p className={styles.heroSlogan}>
            Parce que la Réunion se partage
          </p>

          <div className={styles.heroActions}>
            <Button href="/boutique">Découvrir nos prestations</Button>
            <Button href="/univers" variant="ghost">Notre histoire →</Button>
          </div>
        </div>

        {/* Badge rotatif */}
        <div className={styles.heroBadge}>
          <svg viewBox="0 0 100 100" className={styles.badgeSvg}>
            <defs>
              <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
            </defs>
            <text className={styles.badgeText}>
              <textPath href="#circle">
                Artisanat Réunionnais · Culture · Partage ·
              </textPath>
            </text>
          </svg>
          <span className={styles.badgeIcon}>🌺</span>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* ==========================================
          BANDE COLORÉE — catégories
      =========================================== */}
      <div className={styles.colorStrip}>
        {[
          { label: 'Artisanat', color: 'red' },
          { label: 'Gastronomie', color: 'blue' },
          { label: 'Art & Déco', color: 'yellow' },
          { label: 'Bijoux', color: 'taupe' },
          { label: 'Textile', color: 'red' },
          { label: 'Artisanat', color: 'blue' },
          { label: 'Gastronomie', color: 'yellow' },
          { label: 'Art & Déco', color: 'taupe' },
        ].map((item, i) => (
          <a key={i} href="/boutique" className={`${styles.stripItem} ${styles[item.color]}`}>
            <span className={styles.stripDot} />
            {item.label}
          </a>
        ))}
      </div>

      {/* ==========================================
          INTRO — L'île & ses créateurs
      =========================================== */}
      <section className={styles.sectionIntro}>
        <ScrollReveal>
          <div className={styles.introLeft}>
            <p className="section-label">Notre mission</p>
            <h2 className={styles.introTitle}>
              <span>L&apos;ÎLE</span>
              <span className={styles.introTitleScript}>entre vos mains</span>
            </h2>
            <p className={styles.introText}>
              Nout&apos; Kiltir réunit les artistes, créateurs et producteurs réunionnais
              pour faire rayonner leur savoir-faire au-delà des frontières de l&apos;île.
              Chaque atelier porte une histoire, une tradition, une passion.
            </p>
            <Button href="/univers">En savoir plus →</Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className={styles.introRight}>
            <div className={styles.introImg}>

              {/* IMAGE INTRO — illustration botanique palmier */}
              <Image
                src="/images/intro-palmier.jpg"
                alt="Illustration botanique Réunion"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />

              {/* Timbre flottant par-dessus l'image */}
              <div className={styles.timbreFloat}>
                <Image
                  src="/images/timbre-reunion.jpg"
                  alt="Timbre Réunion"
                  width={90}
                  height={110}
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className={styles.introImgBadge}>
                <span className={styles.badgeNum}>200+</span>
                <span className={styles.badgeLabel}>artisans</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ==========================================
          PRODUITS VEDETTES — grille asymétrique
      =========================================== */}
      <section className={styles.sectionProducts}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <div>
              <p className="section-label">Sélection du moment</p>
              <h2 className={styles.productsTitle}>
                COUPS DE<br />
                <span className={styles.productsTitleScript}>cœur</span>
              </h2>
            </div>
            <Button href="/boutique" variant="ghost">Voir tout →</Button>
          </div>
        </ScrollReveal>

        <div className={styles.productGrid}>
          {[
            {
              name: 'Cuisine Créole',
              artisan: 'Traditions de l\'île',
              price: '18 €',
              cat: 'Gastronomie',
              big: true,
              img: '/images/cuisine-feu.jpg',        // cuisine créole au feu de bois
            },
            {
              name: 'Paysages Sauvages',
              artisan: 'Nature Réunionnaise',
              price: '65 €',
              cat: 'Art & Déco',
              big: false,
              img: '/images/cascade-verte.jpg',       // grande cascade verte
            },
            {
              name: 'Architecture Créole',
              artisan: 'Patrimoine de l\'île',
              price: '120 €',
              cat: 'Culture',
              big: false,
              img: '/images/villa-bleue.jpg',         // bâtiment colonial volets bleus
            },
            {
              name: 'Bassins & Cascades',
              artisan: 'Île Intense',
              price: '12 €',
              cat: 'Nature',
              big: false,
              img: '/images/cascade-bassin.jpg',      // cascade bassin turquoise
            },
          ].map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.08}>
              <a
                href={`/produit/${p.name.toLowerCase().replace(/\s/g, '-')}`}
                className={`${styles.productCard} ${p.big ? styles.productCardBig : ''}`}
              >
                {/* IMAGE PRODUIT */}
                <div className={styles.productImg}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <span className={styles.productCatTag}>{p.cat}</span>
                  <div className={styles.productHover}>
                    <span>Voir le produit</span>
                  </div>
                </div>

                <div className={styles.productInfo}>
                  <div>
                    <p className={styles.productName}>{p.name}</p>
                    <p className={styles.productArtisan}>par {p.artisan}</p>
                  </div>
                  <p className={styles.productPrice}>{p.price}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ==========================================
          MANIFESTE — grande citation
      =========================================== */}
      <section className={styles.sectionManifeste}>

        {/* IMAGE EN FOND — randonneur avec carte */}
        <div className={styles.manifesteBg}>
          <Image
            src="/images/randonneur.jpg"
            alt="Randonneur Réunion"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.manifesteBgOverlay} />
        </div>

        <ScrollReveal>
          <div className={styles.manifesteInner}>
            <span className={styles.manifesteQuote}>&ldquo;</span>
            <p className={styles.manifesteText}>
              Chaque geste de nos artistes<br />
              est une lettre d&apos;amour<br />
              <em>à notre île.</em>
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Button href="/collection">Rencontrer les artistes →</Button>
        </ScrollReveal>
      </section>

      {/* ==========================================
          BANDEAU DÉFILANT
      =========================================== */}
      <div className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          {[...Array(3)].flatMap(() => [
            'Artisanat Réunionnais',
            '🌺',
            'Île Intense',
            '✦',
            'Fait à La Réunion',
            '🌴',
            'Nout\' Kiltir',
            '✦',
          ]).map((item, i) => (
            <span key={i} className={styles.marqueeItem}>{item}</span>
          ))}
        </div>
      </div>
    </>
  )
}