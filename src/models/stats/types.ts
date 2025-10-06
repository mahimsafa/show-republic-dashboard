export interface DashboardStats {
    admins?:     Admins;
    users?:      Brands;
    brands?:     Brands;
    creators?:   Brands;
    challenges?: Challenges;
}

export interface Admins {
    total?:     number;
    suspended?: number;
    onLeave?:   number;
}

export interface Brands {
    total?:   number;
    daily?:   number;
    monthly?: number;
}

export interface Challenges {
    total?:     number;
    active?:    number;
    completed?: number;
}