import { format } from 'date-fns';

export const msToTime = duration => format(duration, 'hh:mm:ss');
