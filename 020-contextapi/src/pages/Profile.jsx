import { useLanguage } from "../context/Context";


const Greeting = () => {
  const { language, toggleLanguage } = useLanguage();
  const greetings = { az: "Salam!", en: "Hello!" };

  return (
    <div>
      <h1>{greetings[language]}</h1>
      <button onClick={toggleLanguage}>
        {language === "az" ? "Change to English" : "Azərbaycancaya keç"}
      </button>
    </div>
  );
};

export default Greeting;
