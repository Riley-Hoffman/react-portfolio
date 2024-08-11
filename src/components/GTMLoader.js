import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTMLoader = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'G-STET7NGB4K',
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return null;
};

export default GTMLoader;
