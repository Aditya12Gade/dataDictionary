import { render, screen, fireEvent , describe , expect , test } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Minify from '../Index';

describe('Minify Component', () => {
    test('renders the component correctly', () => {
        render(<Minify />);
        expect(screen.getByText('Tesla')).toBeInTheDocument();
        expect(screen.getByText('Ford')).toBeInTheDocument();
        expect(screen.getByText('Toyota')).toBeInTheDocument();
        expect(screen.getByText('Action')).toBeInTheDocument();
        expect(screen.getByText('Questions')).toBeInTheDocument();
        expect(screen.getByText('CatchPhrase')).toBeInTheDocument();
    });

    test('displays pop-up confirmation and deletes row on confirmation', () => {
        render(<Minify />);

        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton)
        expect(screen.getByText('Delete the task')).toBeInTheDocument();

        const yesButton = screen.getByText('Yes');
        fireEvent.click(yesButton);
        expect(screen.queryByText('Tesla')).not.toBeInTheDocument();
    });

    test('cancels row deletion on cancellation', () => {
        render(<Minify />);
        
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(screen.getByText('Delete the task')).toBeInTheDocument();

        const noButton = screen.getByText('No');
        fireEvent.click(noButton);
        expect(screen.getByText('Tesla')).toBeInTheDocument();
    });
});
