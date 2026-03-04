import React from 'react';

interface CustomLoaderProps {
    isDark: boolean;
}

const CustomLoader: React.FC<CustomLoaderProps> = ({ isDark }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            <style>{`
                .loader {
                    display: flex;
                    align-items: center;
                    gap: 0;
                }

                .bar {
                    display: inline-block;
                    width: 3px;
                    height: 20px;
                    background-color: rgba(255, 255, 255, 0.5);
                    border-radius: 10px;
                    animation: scale-up4 1s linear infinite;
                }

                .bar:nth-child(2) {
                    height: 35px;
                    margin: 0 5px;
                    animation-delay: 0.25s;
                }

                .bar:nth-child(3) {
                    animation-delay: 0.5s;
                }

                @keyframes scale-up4 {
                    20% {
                        background-color: #ffffff;
                        transform: scaleY(1.5);
                    }

                    40% {
                        transform: scaleY(1);
                    }
                }
            `}</style>
            <div className="loader">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default CustomLoader;
