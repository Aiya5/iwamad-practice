export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return <li className="skill-badge">{skill.label}</li>;
}

export default SkillBadge;