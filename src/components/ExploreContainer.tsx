
import './ExploreContainer.css';
import HomeComponent from '../components/Home/Home';
import PlayerComponent from '../components/Player/Player';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  var content;
  if (name == "Home") {
    content = <HomeComponent name={name} />
  } else if (name == "Player") {
    content = <PlayerComponent name={name} />
  }

  return (
    <>
      {content}
    </>
  );
};

export default ExploreContainer;
