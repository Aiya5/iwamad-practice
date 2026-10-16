import ProfileCard from "../components/ProfileCard";

function HomePage() {
  return (
    <ProfileCard
      name="Gabdulkyzy Aiya"
      role="Aspiring IT Professional"
      avatarUrl={import.meta.env.BASE_URL + "profile.jpg"}
      bio="Aspiring IT professional learning web development. I enjoy building clean interfaces and solving problems with code. Currently studying front-end and back-end fundamentals."
      email="a_gabdulkyzy@KBTU.KZ"
      github="https://github.com/Aiya5"
    />
  );
}

export default HomePage;