import React from 'react';
import chelika from '../../assets/Image/chelika.png';
import './Gtamobile.scss';
import apple from '../../assets/Image/apple.png';
import google from '../../assets/Image/google.png'
interface AppStoreButtonProps {
    appStoreUrl: string;
    className?: string;
}

interface GooglePlayButtonProps {
    googlePlayUrl: string;
    className?: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ appStoreUrl, className }) => {
    const handleClick = () => {
        window.open(appStoreUrl, '_blank');
    };

    return (
        <div className="btss">
        <button 
        
            onClick={handleClick}
            className={`btndow ${className}`}>
                 <img src={apple} alt="apple" />

            <span className="downlod">Download on the 
                <br /> APP Store
            </span>
        </button>
        </div>
    );
};

const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({ googlePlayUrl, className }) => {
    const handleClick = () => {
        window.open(googlePlayUrl, '_blank');
    };

    return (
        <div className="btndowload">
        <button
            onClick={handleClick}
            className={`btndom${className}`}
      >
        <img src={google} alt="" />
            <span className="text-sm font-medium">Get In On 
                <br /> Google Play
            </span>
        </button>
        </div>
    );
};

interface DownloadButtonsProps {
    appStoreUrl?: string;
    googlePlayUrl?: string;
    appStoreClassName?: string;
    googlePlayClassName?: string;
}

export const DownloadButtons: React.FC<DownloadButtonsProps> = ({
    appStoreUrl,
    googlePlayUrl,
    appStoreClassName,
    googlePlayClassName
}) => {
    return (
        <div className="flex gap-4">
            {appStoreUrl && (
                <AppStoreButton
                    appStoreUrl={appStoreUrl}
                    className={appStoreClassName}
                />
            )}
            {googlePlayUrl && (
                <GooglePlayButton
                    googlePlayUrl={googlePlayUrl}
                    className={googlePlayClassName}
                />
            )}
        </div>
    );
};

const Gtamobile = () => {
    const appStoreLink = 'https://apps.apple.com/';  // Замените URL
    const googlePlayLink = 'https://play.google.com/'; // Замените URL

    return (
        <div className="Gtamobile_app">
            <div className="backd container">
                <div className="chelika">
                    <img src={chelika} alt="chelika" className="max-w-full rounded-lg shadow-lg" />
                </div>
            <h2>Enjoy mobile shopping with our Createx 
                <br />Store App!</h2>
            <div className="butan">
                    <DownloadButtons
                        appStoreUrl={appStoreLink}
                        googlePlayUrl={googlePlayLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default Gtamobile;
