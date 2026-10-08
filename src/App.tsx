import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import SkillBadge, { type Skill } from "./components/SkillBadge";
import "./App.css";
import "./style.css";

const skills: Skill[] = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "TypeScript" },
  { id: 5, label: "React" },
];

function App() {
  return (
    <>
      <Header title="My Profile Card" />

      <main className="w-full max-w-4xl mx-auto px-4">
        <ProfileCard
          name="Gabdulkyzy Aiya"
          role="Aspiring IT Professional"
          avatarUrl="/profile.jpg"
          bio="Aspiring IT professional learning web development. I enjoy building clean interfaces and solving problems with code. Currently studying front-end and back-end fundamentals."
          email="a_gabdulkyzy@KBTU.KZ"
          github="https://github.com/Aiya5"
        />

        <section className="skills">
          <h3>Skills</h3>
          {skills.length === 0 ? (
            <p>No skills added yet.</p>
          ) : (
            <ul className="skills-list">
              {skills.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer year={2026} name="Gabdulkyzy Aiya" />
    </>
  );
}

export default App;