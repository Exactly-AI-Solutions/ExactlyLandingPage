import {Check3Icon} from '../icons';
import Typography from './Typography';

export const Advantage = ({text}: {text: string}) => <div className='border-1 border-gray-02 rounded-lg p-2 flex items-center gap-2'>
    <Check3Icon fill="var(--color-blue-04)" width={20} height={20} />
    <Typography size="body" weight="medium">{text}</Typography>
</div>