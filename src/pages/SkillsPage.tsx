import SkillBadge, { type Skill } from "../components/SkillBadge";

const skills: Skill[] = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "TypeScript" },
  { id: 5, label: "React" },
];

function SkillsPage() {
  return (
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
  );
}

export default SkillsPage;