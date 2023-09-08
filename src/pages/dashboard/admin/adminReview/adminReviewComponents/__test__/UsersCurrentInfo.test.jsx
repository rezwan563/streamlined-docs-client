import { render, screen } from '@testing-library/react';
import UsersCurrentInfo from '../UsersCurrentInfo';

describe("test the UsersCurrentInfo component", () => {
    test('renders UsersCurrentInfo component', async () => {
        render(<UsersCurrentInfo />);
        const childElement =await screen.getByLabelText("Welcome Jashim, To Application Review");
        expect(childElement).toBeTruthy();

    });
 
})

