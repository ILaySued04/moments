export interface Moment {
    id?: number,
    title: string,
    description: string,
    image: string | File | null,
    created_at?: string,
    updatet_at?: string,
    comments?: [{ text: string; username: string }]
}