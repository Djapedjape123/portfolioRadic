import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Prevod teksta po jezicima
const resources = {
  sr: {
    translation: {
      brand: "Pedja.dev",
      nav_about: "O meni",
      nav_projects: "Projekti",
      nav_contact: "Kontakt",

      hero_typing1: "Dobrodošli",
      hero_typing2: "Za vaše sajtove",
      hero_typing3: "Za vaš biznis!",
      hero_title: "Full-Stack Developer",
      hero_subtitle: "Developer koji pravi moderne, brze i responsivne web sajtove.",
      hero_contact: "Kontaktiraj me",

      about_who: "Ko Sam Ja",
      about_text1:
        "Zdravo, ja sam Predrag Radić, web developer. Digitalno doba i stvaranje AI alata su proširili trzište i otvorili mnoge konkurentske mogućnosti. U moru digitalne ponude dozvolite mi da Vas izdvojim svojim umećem i od vašeg biznisa napravim unikat koji će posetioce materijalizovati u klijente spajanjem estetike i funkcionalnosti Vašeg sajta.",
      about_text2:
        "Specijalizovan sam za React, TailwindCSS i moderne tehnologije, svaki projekat optimizujem.",

      // SERVICES
      services: {
        title: "Šta Mogu Da Uradim Za Vas",

        webdev_title: "Web Development",
        webdev_desc:
          "Veb razvoj, takođe poznat kao razvoj veb sajtova, odnosi se na zadatke povezane sa kreiranjem, izgradnjom i održavanjem veb sajtova i veb aplikacija koje se pokreću onlajn u pregledaču. Međutim, može da uključuje i veb dizajn, veb programiranje i upravljanje bazama podataka.",

        responsive_title: "Responsive Dizajn",
        responsive_desc:
          "Responzivni veb dizajn je pristup koji sugeriše da dizajn i razvoj treba da reaguju na ponašanje i okruženje korisnika na osnovu veličine ekrana, platforme i orijentacije. Skoro svaki novi klijent danas želi prvo mobilnu verziju svoje veb stranice, a zatim i veličinu ekrana.",

        user_title: "User Friendly",
        user_desc:
          "Imati snažno prisustvo na internetu je neophodno. Postoji jednostavna istina kada je u pitanju uspeh veb stranice – ako želite da ljudi koriste vašu stranicu, morate učiniti tu stranicu jednostavnom za korišćenje. Želite da rastete i privučete nove kupce, ali ako vaša stranica nije jednostavna za korišćenje, onda svom poslu činite više štete nego koristi."
      },
       contact_title: "Kontakt",
      contact_reach: "Možete me kontaktirati putem e-maila ili telefona:",
      contact_email: "Email",
      contact_phone: "Telefon",
      contact_location: "Lokacija",
      contact_form_title: "Pitajte šta vas zanima",
      contact_name: "Ime",
      contact_message: "Poruka",
      contact_send: "Pošalji",
      contact_success: "Poruka uspešno poslata ✅",
      contact_error: "Greška ❌"
    }
  },

  // ENGLISH
  en: {
    translation: {
      brand: "Pedja.dev",
      nav_about: "About",
      nav_projects: "Projects",
      nav_contact: "Contact",

      hero_typing1: "Welcome",
      hero_typing2: "For your websites",
      hero_typing3: "For your business!",
      hero_title: "Full-Stack Developer",
      hero_subtitle: "Developer who creates modern, fast and responsive websites.",
      hero_contact: "Contact me",

      about_who: "Who Am I",
      about_text1:
        "Hello, I'm Predrag Radić, web developer. The digital age and the creation of AI tools have expanded markets and opened up many competitive opportunities. In the sea of digital offers, allow me to set you apart with my skills and make your business unique by turning visitors into clients.",
      about_text2:
        "I specialize in React, TailwindCSS and modern technologies, and every project is optimized.",

      // SERVICES
      services: {
        title: "What I Can Do For You",

        webdev_title: "Web Development",
        webdev_desc:
          "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management",

        responsive_title: "Responsive Design",
        responsive_desc:
          "Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. Almost every new client these days wants on first place a mobile version of their website and then for others screen size.",

        user_title: "User Friendly",
        user_desc:
          "Having a strong Internet presence is necessary. There is a simple truth when it comes to website success – if you want people to use your site, you need to make that site easy to use. You want to grow and attract new customers, but if your site is not user-friendly then you’re doing your business more harm than good."
      },
       contact_title: "Contact",
      contact_reach: "You can reach me by email or phone:",
      contact_email: "Email",
      contact_phone: "Phone",
      contact_location: "Location",
      contact_form_title: "Ask me anything",
      contact_name: "Name",
      contact_message: "Message",
      contact_send: "Send",
      contact_success: "Message sent successfully ✅",
      contact_error: "Error ❌"
    }
  },

  // RUSSIAN
  ru: {
    translation: {
      brand: "Pedja.dev",
      nav_about: "Обо мне",
      nav_projects: "Проекты",
      nav_contact: "Контакт",

      hero_typing1: "Добро пожаловать",
      hero_typing2: "Для вашего сайта",
      hero_typing3: "Для вашего бизнеса!",
      hero_title: "Full-Stack Разработчик",
      hero_subtitle: "Разработчик современных, быстрых и адаптивных сайтов.",
      hero_contact: "Связаться со мной",

      about_who: "Кто Я",
      about_text1:
        "Здравствуйте, меня зовут Предраг Радич, я веб-разработчик. Цифровая эпоха и развитие инструментов ИИ расширили рынок и открыли новые возможности. Позвольте мне выделить ваш бизнес и превратить посетителей в клиентов.",
      about_text2:
        "Я специализируюсь на React, TailwindCSS и современных технологиях, каждый проект оптимизирован.",

      // SERVICES
      services: {
        title: "Что Я Могу Сделать Для Вас",

        webdev_title: "Веб-разработка",
        webdev_desc:
          "Веб-разработка, также известная как разработка веб-сайтов, относится к задачам, связанным с созданием, разработкой и поддержкой веб-сайтов и веб-приложений, работающих в браузере. Однако она может также включать веб-дизайн, веб-программирование и управление базами данных.",

        responsive_title: "Адаптивный дизайн",
        responsive_desc:
          "Адаптивный веб-дизайн — это подход, предполагающий, что дизайн и разработка должны учитывать поведение пользователя и окружающую среду, учитывая размер экрана, платформу и ориентацию. Практически каждый новый клиент сегодня хочет в первую очередь мобильную версию своего сайта, а уже потом — другие размеры экрана.",

        user_title: "Удобство использования",
        user_desc:
          "Имати внезапно появляется в Интернете и неофодно. Если вы хотите, чтобы люди достигли успеха в вашей стране, вы хотите, чтобы люди, посещающие вашу страну, могли учиться в вашей стране только в одном месте. Желаете растеть и приобрести новую покупку, или если ваша страна не является единственной в мире, она поможет вам узнать больше о его предпочтениях."
      },
      contact_title: "Контакт",
      contact_reach: "Вы можете связаться со мной по email или телефону:",
      contact_email: "Email",
      contact_phone: "Телефон",
      contact_location: "Локация",
      contact_form_title: "Задайте вопрос",
      contact_name: "Имя",
      contact_message: "Сообщение",
      contact_send: "Отправить",
      contact_success: "Сообщение успешно отправлено ✅",
      contact_error: "Ошибка ❌"
    }
  }
};

// Init
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default jezik
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
