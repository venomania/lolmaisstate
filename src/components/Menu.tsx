import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

library.add(fas);

const medalLookup: IconLookup = { prefix: 'fas', iconName: 'medal' };
const medalIconDefinition: IconDefinition = findIconDefinition(medalLookup);
const homeLookup: IconLookup = { prefix: 'fas', iconName: 'home' };
const homeIconDefinition: IconDefinition = findIconDefinition(homeLookup);
const userLookup: IconLookup = { prefix: 'fas', iconName: 'user' };
const userIconDefinition: IconDefinition = findIconDefinition(userLookup);
const pieChartLookup: IconLookup = { prefix: 'fas', iconName: 'chart-pie' };
const pieChartIconDefinition: IconDefinition = findIconDefinition(pieChartLookup);

interface AppPage {
  url: string;
  fontawesomeIcon: IconDefinition;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    fontawesomeIcon: homeIconDefinition,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Player',
    url: '/page/Player',
    fontawesomeIcon: userIconDefinition,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Rank',
    url: '/page/Rank',
    fontawesomeIcon: medalIconDefinition,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Ratio',
    url: '/page/Ratio',
    fontawesomeIcon: pieChartIconDefinition,
    mdIcon: heartSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>LOL PERFTOOLS</IonListHeader>
          <IonNote>League Of Legends Performance Tools</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <FontAwesomeIcon icon={appPage.fontawesomeIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          {/*
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}*/}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
