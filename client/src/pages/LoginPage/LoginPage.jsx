import Media from 'react-media';
import MobileLoginPage from '../../components/MobileLoginPage/MobileLoginPage';
import TabletLoginPage from '../../components/TabletLoginPage/TabletLoginPage';
import DesktopLoginPage from '../../components/DesktopLoginPage/DesktopLoginPage';


const LoginPage = () => {
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
                    {matches.mobile && <MobileLoginPage />}
                    {matches.tablet && <TabletLoginPage />}
                    {matches.desktop && <DesktopLoginPage />}
                </>
            )}
        </Media>
    );
};

export default LoginPage;