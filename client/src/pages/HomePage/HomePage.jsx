import Media from 'react-media';
import MobileDashboard from '../../components/MobileDashboard/MobileDashboard';
import TabletDashboard from '../../components/TabletDashboard/TabletDashboard';

const HomePage = () => {
  return (
    <Media
      queries={{
        mobile: '(max-width: 599px)',
        tablet: '(min-width: 600px) and (max-width: 1199px)',
        desktop: '(min-width: 1200px)',
      }}
    >
      {(matches) => (
        <>
          {matches.mobile && <MobileDashboard />}
          {matches.tablet && <TabletDashboard />}
          {matches.desktop && <TabletDashboard />}
        </>
      )}
    </Media>
  );
};

export default HomePage;
