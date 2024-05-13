type Query = {
    name?: string;
    minprice?: number;
    maxprice?: number;
    bedrooms?: number;
    bathrooms?: number;
    storeys?: number;
    garages?: number;
};

type House = {
    name: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    storeys: number;
    garages: number;
};
