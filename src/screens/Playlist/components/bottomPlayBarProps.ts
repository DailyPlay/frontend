export interface BottomPlayBarProps {
  song: Song | {};
  playStatus: 'Playing' | 'Stop' | null;
}

interface Song {
  title?: string;
  songId?: string;
  coverImg?: string;
  singer?: string;
}
