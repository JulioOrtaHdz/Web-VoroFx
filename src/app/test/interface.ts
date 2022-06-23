

export interface Post {
    status: any;
    id?: number;
    titulo: string;
    titulo_url: string;
    extracto: string;
    contenido: string;
    tiempo: string;
    fecha: string;
    num_visitas: number;
    category: string;
    foto: string;
    mini: string;
    users: Author[];
}
export interface Category {
    id?: number;
    name: string;
    description: string;
    posts: Post[];
}

//revisar los nombres exactos que vienen en el api y colocarlos exactamente igual aqui
export interface Author {
    id?: number;
    autor: string;
 
}