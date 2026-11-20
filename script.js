/**
 * GLOBAL TECH - JAVASCRIPT LOGIC & MOBILE OPTIMIZATIONS
 * WhatsApp Oficial: wa.me/message/SMLQTB4RTEXRM1
 * Telefone: +55 35 9929-8461
 */

const WHATSAPP_PHONE = "553599298461";

// 1. Mobile Menu Navigation (Suave e com fechamento automático)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Fechar ao tocar em qualquer link no celular
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });
}

// 2. Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-xl', 'shadow-black/80', 'bg-brand-dark/98');
    } else {
        navbar.classList.remove('shadow-xl', 'shadow-black/80', 'bg-brand-dark/98');
    }
});

// 3. Category WhatsApp Direct Inquiry Trigger (Disparo Inteligente por Categoria)
function consultCategoryWhatsApp(categoryName, message) {
    const formattedMessage = message || `Olá, Global Tech! 👋 Vi a categoria de *${categoryName}* no site e gostaria de saber quais modelos estão disponíveis em estoque e os valores de hoje!`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`;
    window.open(url, '_blank');
}

// 4. Trade-in Simulator Submission (Simulador de Troca)
function handleTradeInSubmit(event) {
    event.preventDefault();

    const currentPhone = document.getElementById('currentPhone').value;
    const phoneCondition = document.getElementById('phoneCondition').value;
    const targetPhone = document.getElementById('targetPhone').value;
    const userCity = document.getElementById('userCity').value;

    const message = 
`Olá, equipe da Global Tech! 🍏
Fiz uma simulação no site para a *Troca Inteligente*:

📱 *Meu aparelho atual:* ${currentPhone}
🔋 *Estado / Bateria:* ${phoneCondition}
🎯 *Aparelho que desejo levar:* ${targetPhone}
📍 *Minha Cidade:* ${userCity}

Gostaria de saber qual a avaliação do meu usado e a diferença para fechar com entrega segura e pagamento no ato! Obrigado!`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`;
    window.open(url, '_blank');
}
