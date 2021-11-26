
import './ExploreContainer.css';
import HomeComponent from '../components/Home/Home';
import PlayerComponent from '../components/Player/Player';
import RankComponent from '../components/RankSlider/RankSlider';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  var content;
  if (name == "Home") {
    content = <HomeComponent name={name} />
  } else if (name == "Player") {
    content = <PlayerComponent name={name} />
  } else if (name == "Rank") {
    content = <RankComponent name={name} />
  }

  return (
    <>
      {content}
    </>
  );
};

export default ExploreContainer;
