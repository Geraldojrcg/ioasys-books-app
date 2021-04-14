import { useCallback } from 'react';
import STRINGS from '@/config/strings';

const useStrings = screen => ({ t: useCallback(label => STRINGS[screen][label], [screen]) });

export default useStrings;
