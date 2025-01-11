export interface CalendarEvent {
    conflict_id: number;
    date: string;
}

export interface CalendarResponse {
    events: CalendarEvent[];
}