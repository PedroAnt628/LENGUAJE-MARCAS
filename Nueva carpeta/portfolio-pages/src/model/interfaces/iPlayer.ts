export interface IPlayer {
    id: number;
    name: string;
    role: string; // Ej: "Starter", "Coach", "Sub"
    country: string;
    description: string;
    image: string;
    tags: string[]; // Como las "tecnologias" en servicios
}