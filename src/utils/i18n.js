import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Hello World": "Hello World",
      Goodbye: "Goodbye",
      Dashboard: "Dashboard",
      Settings: "Settings",
      Profile: "Profile",
      Logout: "Logout",
      Notifications: "Notifications",
      Messages: "Messages",
      Page: "Page",
      "Card 1": "Card 1",
      "Card 2": "Card 2",
      "Card 3": "Card 3",
      "This is some sample text for card 1.":
        "This is some sample text for card 1.",
      "This is some sample text for card 2.":
        "This is some sample text for card 2.",
      "This is some sample text for card 3.":
        "This is some sample text for card 3.",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Hello World": "Bonjour le monde",
      Goodbye: "Au revoir",
      Dashboard: "Tableau de bord",
      Settings: "Paramètres",
      Profile: "Profil",
      Logout: "Se déconnecter",
      Notifications: "Notifications",
      Messages: "Messages",
      Page: "Page",
      "Card 1": "Carte 1",
      "Card 2": "Carte 2",
      "Card 3": "Carte 3",
      "This is some sample text for card 1.":
        "Ceci est un texte d'exemple pour la carte 1.",
      "This is some sample text for card 2.":
        "Ceci est un texte d'exemple pour la carte 2.",
      "This is some sample text for card 3.":
        "Ceci est un texte d'exemple pour la carte 3.",
    },
  },
  hi: {
    translation: {
      "Welcome to React": "React और react-i18next में आपका स्वागत है",
      "Hello World": "नमस्ते दुनिया",
      Goodbye: "अलविदा",
      Dashboard: "डैशबोर्ड",
      Settings: "सेटिंग्स",
      Profile: "प्रोफ़ाइल",
      Logout: "लॉग आउट",
      Notifications: "सूचनाएं",
      Messages: "संदेश",
      Page: "पृष्ठ",
      "Card 1": "कार्ड 1",
      "Card 2": "कार्ड 2",
      "Card 3": "कार्ड 3",
      "This is some sample text for card 1.":
        "यह कार्ड 1 के लिए कुछ नमूना पाठ है।",
      "This is some sample text for card 2.":
        "यह कार्ड 2 के लिए कुछ नमूना पाठ है।",
      "This is some sample text for card 3.":
        "यह कार्ड 3 के लिए कुछ नमूना पाठ है।",
    },
  },
  ur: {
    translation: {
      "Welcome to React": "React اور react-i18next میں خوش آمدید",
      "Hello World": "ہیلو دنیا",
      Goodbye: "الوداع",
      Dashboard: "ڈیش بورڈ",
      Settings: "ترتیبات",
      Profile: "پروفائل",
      Logout: "لاگ آوٹ",
      Notifications: "اطلاعات",
      Messages: "پیغامات",
      Page: "صفحہ",
      "Card 1": "کارڈ 1",
      "Card 2": "کارڈ 2",
      "Card 3": "کارڈ 3",
      "This is some sample text for card 1.":
        "یہ کارڈ 1 کے لئے کچھ نمونہ متن ہے۔",
      "This is some sample text for card 2.":
        "یہ کارڈ 2 کے لئے کچھ نمونہ متن ہے۔",
      "This is some sample text for card 3.":
        "یہ کارڈ 3 کے لئے کچھ نمونہ متن ہے۔",
    },
  },
};

export const languages = Object.keys(resources);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
