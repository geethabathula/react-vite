import ProfileCard from "./ProfileCard";
import "../assets/css/ProfileCard.css";
function App() {
  const aiAssistants = [
    {
      twitterHandle: "@gptAssistant1",
      imageSrc: "https://www.pngall.com/wp-content/uploads/15/ChatGPT-Logo.png",
      imageAlt: "GPT Assistant 1",
      description:
        "I'm an AI assistant designed to help with general inquiries.",
    },
    {
      twitterHandle: "@aiChatbot2",
      imageSrc:
        "https://i.pinimg.com/originals/7e/4e/eb/7e4eebfd3f66d18b69139a332974d43b.png",
      imageAlt: "AI Chatbot 2",
      description:
        "Specializing in providing information on technology trends and news.",
    },
    {
      twitterHandle: "@smartBot3",
      imageSrc:
        "https://beebom.com/wp-content/uploads/2021/04/shutterstock_1851699463-e1618383429287.jpg",
      imageAlt: "Smart Bot 3",
      description:
        "My expertise lies in assisting users with daily tasks and scheduling.",
    },
  ];
  return (
    <>
      <section className="hero is-success">
        <div className="hero-body">
          <p className="title has-text-centered">AI-ASSISTANTS</p>
        </div>
      </section>
      <div className="pda">
        {aiAssistants.map((ai, index) => {
          return (
            <ProfileCard
              key={index}
              imageSrc={ai.imageSrc}
              imageAlt={ai.imageAlt}
              twitterHandle={ai.twitterHandle}
              description={ai.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
