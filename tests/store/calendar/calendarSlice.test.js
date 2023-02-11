import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from '../../../src/store/calendar/calendarSlice';
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from '../../fixture/calendarStates';


describe('Pruebas en calendarSlice', () => { 
    
    test('debe de regresar el estado por defecto', () => { 
        
        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState );

    });

    test('onSetActiveEvent debe de activar el evento', () => { 
        
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0] ) );
        expect( state.activeEvent ).toEqual( events[0] );

    });

    test('onAddNewEvent debe de agregar el evento', () => { 

        const newEvent = {
            id : '3',
            start: new Date('2022-10-01 13:00'),
            end: new Date('2022-10-01 15:00'),
            title: 'Cumpleaños de Rochu',
            notes: 'Alguna nota',
        };

        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ) );
        expect( state.events ).toEqual([ ...events, newEvent ]);

    });

    test('onUpdateEvent debe de actualizar el evento', () => { 

        const updateEvent = {
            id : '1',
            start: new Date('2022-10-01 13:00'),
            end: new Date('2022-10-01 15:00'),
            title: 'Cumpleaños de Juan actualizado',
            notes: 'Alguna nota actualizado',
        };

        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updateEvent ) );
        expect( state.events ).toContain( updateEvent );

     });

    test('onDeleteEvent debe de borrar el evento activo', () => { 

        const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent() );
        expect( state.activeEvent ).toBe( null );
        expect( state.events ).toEqual( events.filter( event => event.id != '1' ) );

     });

    test('onLoadEvents debe de establecer los eventos', () => { 

        const state = calendarSlice.reducer( initialState, onLoadEvents( events ) );
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual( events );

        const newState = calendarSlice.reducer( state, onLoadEvents( events ) );
        expect( state.events.length ).toBe( events.length );

     });

    test('onLogoutCalendar debe de limpiar el estado', () => { 

        const state = calendarSlice.reducer( calendarWithActiveEventState, onLogoutCalendar() );
        expect( state ).toEqual( initialState );

    });

 });