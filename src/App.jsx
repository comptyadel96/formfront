import React, { useState } from "react"
import "./App.css"
const LandingPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cv, setCv] = useState(null)
  const [loading, setLoading] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Créez un formData pour l'envoi du fichier
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("cv", cv)
    setLoading(true)

    try {
      // Envoi du formulaire à votre backend
      const response = await fetch("http://localhost:3000/api/upload-cv", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert("CV envoyé avec succès !")
      } else {
        alert("Erreur lors de l'envoi du CV.")
      }
    } catch (error) {
      console.error("Erreur:", error)
      alert("Erreur lors de l'envoi du CV.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col  gap-10 w-full lg:pb-20 pb-10">
      {loading && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p className="text-white">Envoi en cours...</p>
        </div>
      )}
      <div className="bg-black w-full p-8  ">
        <img src="/logo.png" alt="" />
      </div>
      <h1 className="lg:text-4xl text-center font-semibold ">
        Annonces de Recrutement{" "}
      </h1>
      <div className="flex">
        <div className="flex flex-col gap-2 lg:mx-10 bg-white shadow-xl border lg:p-5 lg:w-[50%]">
          <h2 className="lg:text-2xl font-semibold">
            Poste : Digital Project Manager
          </h2>
          <h2 className="lg:text-2xl font-semibold">Lieu : Alger- Hydra</h2>
          <h2 className="lg:text-2xl font-semibold">Type de contrat : [CDI]</h2>
          <h2 className="lg:text-2xl font-semibold">Description du poste :</h2>
          <p>
            Le Digital Project Manager est responsable de la mise en œuvre des
            projets digitaux, en veillant à ce que les objectifs, les délais, et
            les budgets soient respectés. En tant que lien principal entre les
            clients et les équipes internes, cette personne jouera un rôle clé
            dans la réception et le traitement des briefs, ainsi que dans la
            coordination des efforts pour assurer la réussite des projets.
          </p>
          <h2 className="lg:text-2xl font-semibold">Responsabilités :</h2>
          <p>
            Définir les objectifs du projet, les délais, le budget et le plan
            d'exécution en se basant sur le plan de marketing digital conçu par
            le strategic planner. <br /> Être l'interlocuteur principal des
            clients, recevoir et traiter les briefs. <br /> Créer des
            calendriers conversationnels en suivant la stratégie et la ligne
            éditoriale des clients. <br /> Faire le suivi des projets digitaux
            en interne pour garantir leur bon déroulement. <br /> Proposer des
            idées d'activations digitales innovantes en collaboration avec
            l'équipe créative et stratégique. <br /> Veiller au respect des
            normes de conformité et de qualité tout au long du projet. <br />{" "}
            Faciliter la communication entre les différentes unités internes de
            l'entreprise. <br /> Communiquer régulièrement avec les clients pour
            comprendre leurs besoins et gérer leurs attentes.
          </p>
          <h2 className="lg:text-2xl font-semibold">Qualifications</h2>
          <ol>
            <li>Diplôme de niveau Bac+3 ou plus.</li>
            <li>
              2+ ans d'expérience dans le domaine du marketing digital ou dans
              une discipline pertinente.
            </li>
            <li>Expérience souhaitée en digital media buying.</li>
            <li>
              Compétences solides en analyse, communication et leadership.
            </li>
            <li>
              Expérience dans l'utilisation des réseaux sociaux dans un cadre
              professionnel.
            </li>
            <li>Connaissance des tendances et des normes du secteur.</li>
          </ol>
        </div>

        {/* recrutement DA */}

        <div className="flex flex-col gap-2 lg:mx-10 bg-white shadow-xl border lg:p-5 lg:w-[50%]">
          <h2 className="lg:text-2xl font-semibold">
            Poste : Directeur Artistique
          </h2>
          <h2 className="lg:text-2xl font-semibold">Lieu : Alger- Hydra</h2>
          <h2 className="lg:text-2xl font-semibold">Type de contrat : [CDI]</h2>
          <h2 className="lg:text-2xl font-semibold">Description du poste :</h2>
          <p>
            Nous recherchons un Directeur Artistique talentueux et passionné
            pour rejoindre notre équipe créative. Le candidat idéal aura une
            expertise avérée dans l'élaboration de campagnes publicitaires et
            saura traduire les axes stratégiques en concepts créatifs et
            artistiques percutants. Il sera capable de prendre en main un brief,
            de le comprendre en profondeur, et de le transformer en propositions
            visuelles innovantes et impactantes.
          </p>
          <h2 className="lg:text-2xl font-semibold">Responsabilités :</h2>
          <p>
            Travailler en étroite collaboration avec les équipes stratégiques
            pour comprendre les axes stratégiques des campagnes publicitaires.{" "}
            <br />
            Traduire les axes stratégiques en axes créatifs et artistiques qui
            répondent aux objectifs du client. <br /> Exécuter les briefs en
            proposant des concepts visuels originaux et pertinents. Participer
            activement à toutes les étapes de la création, de l'idée initiale à
            la réalisation finale. <br /> Collaborer avec les designers,
            rédacteurs, et autres membres de l'équipe créative pour assurer la
            cohérence et la qualité des campagnes. <br /> Présenter et défendre
            les concepts créatifs auprès des clients et des équipes internes.{" "}
            <br /> Rester informé des tendances du design et de la publicité
            pour proposer des idées novatrices.
          </p>
          <h2 className="lg:text-2xl font-semibold">Qualifications</h2>
          <ol>
            <li>Diplôme en arts graphiques, design ou domaine similaire</li>
            <li>
              5+ ans d'expérience en tant que Directeur Artistique, de
              préférence en agence de publicité
            </li>
            <li>
              Solide portfolio démontrant une capacité à transformer des briefs
              en concepts créatifs de qualité
            </li>
            <li>
              Compétences en design graphique avec une maîtrise des logiciels
              Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.).
            </li>
            <li>
              Excellentes compétences en communication et en présentation.
            </li>
            <li>
              Esprit d'équipe, créativité, et capacité à travailler sous
              pression.
            </li>
          </ol>
        </div>
      </div>

      <p className="text-center lg:text-2xl font-semibold lg:mt-8 lg:mb-3">
        Remplissez ce formualire pour pouvoir postuler
      </p>
      {/* formulaire d'envoi */}
      <form
        className="flex flex-col items-center self-center gap-6 bg-gray-100  lg:p-8"
        onSubmit={handleSubmit}
      >
        <input
          className="py-1 border border-black pl-3"
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="py-1 border border-black pl-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setCv(e.target.files[0])}
          required
        />
        <button
          className="bg-black text-white rounded-xl py-1 lg:px-8"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default LandingPage
