import { useEffect } from 'react';
import Nanobar from 'nanobar';
import './style.less';

const LoadingBar = () => {
    useEffect(() => {
        const nanobar = new Nanobar({ id: 'nano-bar' });
        return () => {
            nanobar.go(100);
        };
    }, []);
    return null;
};

export default LoadingBar;
