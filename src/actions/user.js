import { v4 as uuidv4 } from 'uuid';

export const actionAddUser = (
    {
        firstName = '',
        LastName = '',
        email = ''
    } = {}
) => ({
    type: 'ADD_USER',
    trip: {
        id: uuidv4(),
        firstName,
        LastName,
        email
    }
});