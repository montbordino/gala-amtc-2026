const games = {
    'pierre-feuille-ciseaux': {
        icon: '✊',
        title: 'Pierre Feuille Ciseaux',
        rules: `Un classique revisité Casino Royale ! Affrontez l'animateur en duel.\n\n• Chaque joueur choisit simultanément Pierre ✊, Feuille ✋ ou Ciseaux ✌️\n• Pierre bat Ciseaux — Ciseaux battent Feuille — Feuille bat Pierre\n• Format : meilleur des 3 manches\n• Le vainqueur repart avec ses jetons !`,
        tokens: '🪙 2 jetons par victoire'
    },
    'roulette': {
        icon: '🎡',
        title: 'Roulette',
        rules: `La reine du casino vous attend !\n\n• Misez vos jetons sur un numéro, une couleur ou une parité\n• La boule tourne… le destin décide\n• Mise sur une couleur (Rouge/Noir) : gain x2\n• Mise sur un numéro plein : gain x10\n• Chaque joueur dispose de 3 jetons par partie`,
        tokens: '🪙 Gains selon mise'
    },
    'blackjack': {
        icon: '🃏',
        title: 'Blackjack',
        rules: `Le jeu de cartes emblématique !\n\n• Objectif : approcher 21 sans dépasser, battre le croupier\n• Les cartes valent leur valeur nominale (As = 1 ou 11)\n• Actions disponibles : Tirer (Hit) ou Rester (Stand)\n• Blackjack (As + figure) = victoire immédiate avec bonus\n• Si vous dépassez 21, vous perdez (Bust)`,
        tokens: '🪙 3 jetons par victoire'
    },
    'quizz': {
        icon: '🧠',
        title: 'Quizz',
        rules: `Testez vos connaissances et remportez gros !\n\n• Questions sur la culture générale, MIAGE, pop culture…\n• Format individuel ou équipe de 2\n• 10 questions par partie — 30 secondes par question\n• Bonus : question jackpot pour doubler ses jetons\n• Le meilleur score de la soirée remporte 100 € de bon !`,
        tokens: '🪙 1 jeton par bonne réponse'
    },
    'time-knockout': {
        icon: '⏱️',
        title: 'Time Knockout',
        rules: `Le défi contre la montre !\n\n• Chaque joueur doit réaliser un défi en un temps imparti\n• Le chrono tourne, la pression monte !\n• Challenges variés : mémorisation, réflexes, coordination\n• Elimination progressive — le dernier debout gagne le jackpot\n• Minimum 4 joueurs par partie`,
        tokens: '🪙 4 jetons au vainqueur'
    },
    'anneaux': {
        icon: '🏆',
        title: 'Anneaux',
        rules: `L'adresse avant tout !\n\n• Lancez vos anneaux pour les accrocher aux plots\n• Distance imposée par l'animateur\n• 3 anneaux par joueur — chaque anneau accroché = points\n• Distances croissantes pour les bonus\n• Duel possible entre deux joueurs`,
        tokens: '🪙 1 à 3 jetons selon la distance'
    },
    'yams': {
        icon: '🎲',
        title: 'Yams',
        rules: `Le jeu de dés stratégique !\n\n• 5 dés à lancer, jusqu'à 3 relances par tour\n• Constituez les meilleures combinaisons : Brelan, Carré, Full, Suite, Yams…\n• Yams (5 dés identiques) = gain maximum\n• Format : meilleur des 3 manches face à l'animateur\n• Stratégie et chance au rendez-vous !`,
        tokens: '🪙 2 à 5 jetons selon combo'
    },
    'bras-de-fer': {
        icon: '💪',
        title: 'Bras de Fer',
        rules: `La force brute à l'honneur !\n\n• Défi classique de force : le coude sur la table, main dans la main\n• Victoire : forcer la main adverse à toucher la table\n• Format : meilleur des 3 manches\n• Catégories séparées si besoin\n• Le champion de la soirée recevra un titre spécial !`,
        tokens: '🪙 3 jetons par victoire'
    }
};

function openGame(id) {
    const g = games[id];
    if (!g) return;
    document.getElementById('modalIcon').textContent = g.icon;
    document.getElementById('modalTitle').textContent = g.title;
    document.getElementById('modalRules').innerHTML = g.rules.replace(/\n/g, '<br>');
    document.getElementById('modalTokens').textContent = g.tokens;
    document.getElementById('gameModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    if (e.target === document.getElementById('gameModal')) closeModalBtn();
}

function closeModalBtn() {
    document.getElementById('gameModal').classList.remove('open');
    document.body.style.overflow = '';
}

function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Active nav
const sections = ['menu', 'activites', 'regles', 'lots', 'djs', 'planning'];
const navBtns = document.querySelectorAll('.nav-btn');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
    });
    navBtns.forEach((btn, i) => {
        btn.classList.toggle('active', sections[i] === current);
    });
});