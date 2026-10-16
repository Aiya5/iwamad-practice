import { useLikes } from "../context/LikesContext";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button className="like-btn" onClick={addLike}>
      {likes > 0 ? `❤️ ${likes}` : "🤍 Like"}
    </button>
  );
}

export default LikeButton;