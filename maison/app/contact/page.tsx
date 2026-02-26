'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import styles from './page.module.css'

export default function ContactPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <ScrollReveal>
          <p className="section-label">Restons en contact</p>
          <h1 className={styles.title}>
            PARLONS<br/>
            <span className={styles.titleScript}>ensemble</span>
          </h1>
        </ScrollReveal>
      </section>

      <div className={styles.grid}>
        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Votre nom</label>
            <input type="text" className={styles.input} placeholder="Marie Dupont" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} placeholder="marie@exemple.re" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Sujet</label>
            <select className={styles.input}>
              <option>Une commande</option>
              <option>Devenir artisan partenaire</option>
              <option>Presse / Médias</option>
              <option>Autre</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} rows={5} placeholder="Votre message..." />
          </div>
          <button type="button" className={styles.submitBtn}>
            Envoyer →
          </button>
        </div>

        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <p className="section-label">Adresse</p>
            <p>97400 Saint-Denis<br/>La Réunion, France</p>
          </div>
          <div className={styles.infoBlock}>
            <p className="section-label">Email</p>
            <a href="mailto:bonjour@noutkiltir.re">bonjour@noutkiltir.re</a>
          </div>
          <div className={styles.infoBlock}>
            <p className="section-label">Vous êtes artisan ?</p>
            <p>Rejoignez notre communauté de créateurs réunionnais.</p>
            <a href="/artisan" className={styles.artisanLink}>Nous rejoindre →</a>
          </div>
        </div>
      </div>
    </>
  )
}