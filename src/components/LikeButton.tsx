import { useLikes } from "../context/LikesContext";
import Button from "./ui/Button";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button aria-label={`Like (${likes} likes)`} onClick={addLike}>
      {likes > 0 ? `❤️ ${likes}` : "🤍 Like"}
    </Button>
  );
}

export default LikeButton;