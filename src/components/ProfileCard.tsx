import { useState } from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  bio: string;
  email: string;
  github: string;
};

function ProfileCard({
  name,
  role,
  avatarUrl,
  bio,
  email,
  github,
}: ProfileCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <article className="card">
      {avatarUrl && (
        <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
      )}
      <div className="card-info">
        <h2>{name}</h2>
        <p className="role">{role}</p>
        <p>{bio}</p>
        <ul className="links">
          <li>
            <a href={`mailto:${email}`}>Email</a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <button className="like-btn" onClick={() => setLikes(likes + 1)}>
          {likes > 0 ? `❤️ ${likes}` : "🤍 Like"}
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;