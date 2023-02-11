

export const events = [
    {
        id : '1',
        start: new Date('2022-10-16 13:00'),
        end: new Date('2022-10-16 15:00'),
        title: 'Cumpleaños de Juan',
        notes: 'Alguna nota',
    },
    {
        id : '2',
        start: new Date('2022-07-24 13:00'),
        end: new Date('2022-07-24 15:00'),
        title: 'Cumpleaños de Lucía',
        notes: 'Alguna nota de Lucía',
    },
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] }
}