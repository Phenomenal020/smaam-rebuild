export interface Glance {
    campuses: number;
    foundingYear: number;
    classrooms: number;
    parents: number;
    passRate: number;
}

export interface Post {
    id: string;
    imgSrc: string;
    date: string;
    header: string;
    body: string;
    page: string;
}

export interface CalendarData {
    id: number,
    header: string;
    comment: string;
    day: number;
    month: string;
    year: number;
}