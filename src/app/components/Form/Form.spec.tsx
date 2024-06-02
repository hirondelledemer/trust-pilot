import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form, { FormProps } from './Form';

describe('Form', () => {
  const defaultProps: FormProps = {
    onSubmit: jest.fn(),
  };

  it('should show only ratings field', () => {
    render(<Form {...defaultProps} />);
    const ratingsImage = screen.getByRole('img');
    const star2 = screen.getByRole('radio', {
      name: /2 stars: poor/i,
    });

    const inputs = screen.queryAllByRole('textbox');

    expect(ratingsImage).toBeDefined();
    expect(inputs.length).toBe(0);
  });

  it('should show all form when star is clicked', () => {
    render(<Form {...defaultProps} />);

    const ratingsImage = screen.getByRole('img');
    const star2 = screen.getByRole('radio', {
      name: /2 stars: poor/i,
    });
    fireEvent.click(star2);

    const [contentInput, titleInput] = screen.queryAllByRole('textbox');
    const dateInput = screen.getByPlaceholderText(/mm\/dd\/yyyy/i);

    expect(ratingsImage).toBeDefined();
    expect(contentInput).toBeDefined();
    expect(titleInput).toBeDefined();
    expect(dateInput).toBeDefined();
  });

  it('should show errors if fields are not filled', async () => {
    render(<Form {...defaultProps} />);

    const star2 = screen.getByRole('radio', {
      name: /2 stars: poor/i,
    });
    fireEvent.click(star2);

    const submitButton = screen.getByRole('button', {
      name: /submit review/i,
    });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('Your review must be at least 10 characters.')
      ).toBeDefined();
      expect(
        screen.getByText('Your title must be at least 4 characters.')
      ).toBeDefined();
      expect(
        screen.getByText(
          'Please confirm when you had this experience. If you don’t know the exact date, you can estimate.'
        )
      ).toBeDefined();
    });
  });

  it('should submit form', async () => {
    const submitSpy = jest.fn();

    render(<Form onSubmit={submitSpy} />);

    const star2 = screen.getByRole('radio', {
      name: /2 stars: poor/i,
    });
    fireEvent.click(star2);
    const [contentInput, titleInput] = screen.queryAllByRole('textbox');
    const dateInput = screen.getByPlaceholderText(/mm\/dd\/yyyy/i);

    const submitButton = screen.getByRole('button', {
      name: /submit review/i,
    });

    fireEvent.change(contentInput, { target: { value: 'This is a review' } });
    fireEvent.change(titleInput, { target: { value: 'This is a review' } });
    fireEvent.change(dateInput, { target: { value: '2024-01-01' } });

    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(submitSpy).toHaveBeenCalledWith(
        {
          content: 'This is a review',
          date: '2024-01-01',
          rating: 2,
          title: 'This is a review',
        },
        expect.anything()
      );
    });
  });
});
