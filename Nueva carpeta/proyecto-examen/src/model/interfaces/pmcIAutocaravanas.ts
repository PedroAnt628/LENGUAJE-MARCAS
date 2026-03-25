export interface PmcIAutocaravanas {
  cod: number;
  marca: string;
  modelo: string;
  tipo: string;
  personas: number;
  potencia_cv: number;
  precio_eur: number;
  medidas: {
    longitud: number;
    anchura: number;
    altura: number;
  };
  imagenes: string[];
}