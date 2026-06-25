export interface HeroTileData {
    id?: string;
    title: string;
    chips: Chip[];
    
}

export interface Chip {
    name: string;
    type: 'light' | 'dark';
}

export interface Project {
    id?: string;
    displayType: 'writeup' | 'demo';
    title: string;
    subtitle?: string;
    description?: string;

}