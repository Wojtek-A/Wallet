import Media from 'react-media';
import MobileRegistrationPage from '../../components/MobileRegistrationPage/MobileRegistrationPage';
import TabletRegistrationPage from '../../components/TabletRegistrationPage/TabletRegistrationPage';
import DesktopRegistrationPage from '../../components/DesktopRegistrationPage/DesktopRegistrationPage';

const RegistrationPage = () => {
    return (
        <Media
            queries={{
                mobile: '(max-width: 767px)',
                tablet: '(min-width: 768px) and (max-width: 1199px)',
                desktop: '(min-width: 1200px)',
            }}
        >
            {(matches) => (
                <>
                    {matches.mobile && <MobileRegistrationPage />}
                    {matches.tablet && <TabletRegistrationPage />}
                    {matches.desktop && <DesktopRegistrationPage />}
                </>
            )}
        </Media>
    );
};

export default RegistrationPage;