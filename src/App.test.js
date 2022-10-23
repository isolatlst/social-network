import { render, screen } from '@testing-library/react';
import AppContainerWithProvider from './App';

test('renders learn react link', () => {
	const { container } = render(<AppContainerWithProvider />);
	expect(container.firstChild).toHaveClass('app');
});