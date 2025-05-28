import React from 'react';
import chelika from '../../assets/Image/chelika.png';
import './Gtamobile.scss';
import apple from '../../assets/Image/apple.png';
import google from '../../assets/Image/google.png'
import vector2 from '../../assets/Image/Vector (1).png'
import vector3 from '../../assets/Image/Vector3.svg'
import vector4 from '../../assets/Image/Vector (2).png'

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
        
            onClick={handleClick}>
                 <img className='apple' src={apple} alt="apple" />
<img className='vector2' src={vector2} alt="" />
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
      >
        <img className='google' src={google} alt="google" />
        <div className="vectus">
        <img src={vector3} alt="" />
        </div>
        <div className="vectus2">
        <img src={vector4} alt="" />
        </div>
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
    const appStoreLink = 'https://apps.apple.com/';  
    const googlePlayLink = 'https://play.google.com/'; 

    return (
        <div className="Gtamobile_app">
            <div className="backd container">
                <div className="chelika">
                    <img src={chelika} alt="chelika" className="max-w-full rounded-lg shadow-lg" />
                </div>
            <h1>Enjoy mobile shopping with our Createx 
                <br />Store App!</h1>
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
