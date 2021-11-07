import { VolumeInfoInterface } from '.';

export interface BookInterface {
    id?: string;
    volumeInfo?: VolumeInfoInterface;
    custom?: boolean;
}
