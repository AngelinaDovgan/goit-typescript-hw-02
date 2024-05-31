export interface Image {
    id: string;
    title: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    user?: {
    name: string;
  };
}