const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


async function main() {

    const racine ="./*"
    const node ="./package.json*"
    const make ="./Makefile"
    const cdnJs = `cdnjs.com`;
    const archiviste = `https://archive.org`;
    const github = `https://github.com/universmc/user.git`;
    const dchub_public = `t.me/dchub_01`;
    const dchub_prive = `t.me/dchub_Pibot`;
    const user_Pibot = `https://t.me/user_Pibot/`;
    const youtube_Pibot = `https://t.me/user_Pibot/`;
    const google_Pibot = `https://t.me/google_Pibot/`;
    const gemini_Pibot = `https://t.me/gemini_Pibot/`;
    const worksJson = `
{
    "rôle": "ssistant",
    "compétences": [
      "Expérience dans le développement d'applications web complètes",
      " Construction d'APIs RESTful, modélisation de bases de données et intégration de la technologie Blockchain ",
      " Familiarité avec le contrôle de version Git, l'intégration continue et les méthodes de développement Agile"
    ],
    "contexte": {
      "phaseDeProjet": "Phase de développement",
      "descriptionDuProjet": "Plateforme en ligne pour les allocations universelles basées sur les curriculum vitae numériques gpt-wallet",
      "zoneDeFocus": "Installation de systèmes back-end solides et d'éléments frontaux intuitifs"
    },
    "tâche": {
      "description": "Générer le code HTML pour la page d'atterrissage du projet hébergé sur Telegram, tenant compte des principes du Web sémantique W3C et des consignes d'accessibilité.",
      "étapes": [
        {
          "numéro": "1",
          "action": "Examiner les spécifications techniques détaillées de la phase de planification"
        },
        {
          "numéro": "2",
          "action": "Installer l'environnement back-end (serveurs, plates-formes d'hébergement, système d'exploitation)"
        },
        {
          "numéro": "3",
          "action": "Créer des modèles de base de données personnalisés en fonction des exigences du projet"
        },
        {
          "numéro": "4",
          "action": "Écrire un code côté serveur propre, facilement maintenable et performant"
        },
        {
          "numéro": "5",
          "action": "Développer des API stables, flexibles et extensibles"
        },
        {
          "numéro": "6",
          "action": "Procéder à des tests rigoureux pour identifier d'éventuels problèmes de fiabilité, de sécurité et de performance"
        },
        {
          "numéro": "7",
          "action": "Corriger les erreurs et failles décelées"
        },
        {
          "numéro": "8",
          "action": "Mettre en oeuvre les vues correspondantes au parcours utilisateur souhaité"
        },
        {
          "numéro": "9",
          "action": "Intégrer des services tiers (traitement des paiements via la blockchain)"
        },
        {
          "numéro": "10",
          "action": "Effectuer des contrôles qualité complets avant toute mise à jour"
        },
        {
          "numéro": "11",
          "action": "Respecter les cycles de sprint et intégrer des histoires utilisateur en accord avec les priorités du projet"
        }
      ],
      "résultatAttendu": "Une plateforme entièrement opérationnelle offrant des fondations solides, une grande réactivité, des interfaces fluides, une navigation cohérente, une excellente gestion des erreurs, une sécurité irréprochable, une rapidité impressionnante et une compatibilité multiplates-formes, afin de proposer une expérience engageante et valorisante pour chacun des participants dans le cadre des allocations universelles basées sur les curriculum vitae numériques.",
      "exigencesSupplémentaires": [
        "Sections pour les plans d'action, les études d'impact, les organigrammes, les rôles et responsabilités, les jalons clés et les outils utilisés",
        "Tenir compte des principes du Web sémantique définis par le W3C",
        "Mise en oeuvre des dispositions régissant l'accessibilité pour les personnes malvoyantes ou malentendantes"
      ]
    }
  }
    `;
    const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${worksJson}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+`
    
    


    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
        
            {role: 'assistant',content:knowleddge},
            {role: 'assistant',content: "je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'devine']"},
            {
                role: 'system',
                content: "Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @user_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."
            },                
            {
                role: 'assistant',
                content: "Rédigez le developper de la présentation complète du salon télégramme et de l'intelligence artificielle au cœur de ce code source",
            },
            {role: 'system',content:worksJson},
            {role: 'assistant',content:"Ta réponse devrait être rédigé dans une page web complete en HTML et dynamique en respectant les normes du Web sémantique W3C au format HTML"},
        
            // Set a user message for the assistant to respond to.
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.4,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 4096,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "build/html_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();
