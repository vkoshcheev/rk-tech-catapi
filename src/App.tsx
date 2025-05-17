import { useEffect, useState } from 'react';
import './App.scss';
import AppButton from './components/AppButton/AppButton';
import CheckboxItem from './components/CheckboxItem/CheckboxItem';
import { requestCatImage } from './utils/requestCatImage';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefreshing, setIsAutoRefreshing] = useState(false);

  const [catSrc, setCatSrc] = useState('');
  const [error, setError] = useState('');
  const getCat = () => {
    requestCatImage().then((catImageSrc) => {
      if (!catImageSrc.error && catImageSrc.url) {
        setCatSrc(catImageSrc.url);
        setError('');
      } else setError(catImageSrc.error);
    });
  };

  useEffect(() => {
    if (!isEnabled || !isAutoRefreshing) return;

    const intervalId = setInterval(getCat, 5000);
    return () => clearInterval(intervalId);
  }, [isEnabled, isAutoRefreshing]);

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="app">
      <CheckboxItem label={'Enabled'} checked={isEnabled} setChecked={setIsEnabled} />
      <CheckboxItem
        label={'Auto-refresh every 5 seconds'}
        checked={isAutoRefreshing}
        setChecked={setIsAutoRefreshing}
      />
      <AppButton label={'Get cat'} onClick={getCat} disabled={!isEnabled} />
      {error ? <div className="app__error-text">{error}</div> : null}
      {catSrc ? <img className="app__image" src={catSrc} /> : null}
    </div>
  );
};

export default App;
