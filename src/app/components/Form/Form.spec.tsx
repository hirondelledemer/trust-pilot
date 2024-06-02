import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form, { FormProps } from './Form';

describe('Form', () => {
  const defaultProps: FormProps = {
    onSubmit: jest.fn(),
  };

  it('should show only ratings field', () => {
    render(<Form {...defaultProps} />);
    const driver = getDriver();

    expect(driver.getRatingsImage()).toBeDefined();
    expect(driver.getInputs().length).toBe(0);
  });

  it('should show all form when star is clicked', () => {
    render(<Form {...defaultProps} />);
    const driver = getDriver();

    fireEvent.click(driver.getStar2Button());

    expect(driver.getRatingsImage()).toBeDefined();
    expect(driver.getContentInput()).toBeDefined();
    expect(driver.getTitleInput()).toBeDefined();
    expect(driver.getDateInput()).toBeDefined();
  });

  it('should show errors if fields are not filled', async () => {
    render(<Form {...defaultProps} />);
    const driver = getDriver();

    fireEvent.click(driver.getStar2Button());
    fireEvent.submit(driver.getSubmitButton());

    await waitFor(() => {
      expect(driver.getContentError()).toBeDefined();
      expect(driver.getTitleError()).toBeDefined();
      expect(driver.getDateError()).toBeDefined();
    });
  });

  it('should submit form', async () => {
    const submitSpy = jest.fn();

    render(<Form onSubmit={submitSpy} />);
    const driver = getDriver();

    fireEvent.click(driver.getStar2Button());

    fireEvent.change(driver.getContentInput(), {
      target: { value: 'This is a review' },
    });
    fireEvent.change(driver.getTitleInput(), {
      target: { value: 'This is a review' },
    });
    fireEvent.change(driver.getDateInput(), {
      target: { value: '2024-01-01' },
    });

    fireEvent.submit(driver.getSubmitButton());

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

const getDriver = () => ({
  getRatingsImage: () => screen.getByRole('img'),
  getInputs: () => screen.queryAllByRole('textbox'),
  getContentInput: () => screen.queryAllByRole('textbox')[0],
  getTitleInput: () => screen.queryAllByRole('textbox')[1],
  getDateInput: () => screen.getByPlaceholderText(/mm\/dd\/yyyy/i),
  getSubmitButton: () =>
    screen.getByRole('button', {
      name: /submit review/i,
    }),
  getStar2Button: () =>
    screen.getByRole('radio', {
      name: /2 stars: poor/i,
    }),
  getContentError: () =>
    screen.getByText('Your review must be at least 10 characters.'),
  getTitleError: () =>
    screen.getByText('Your title must be at least 4 characters.'),
  getDateError: () =>
    screen.getByText(
      'Please confirm when you had this experience. If you don’t know the exact date, you can estimate.'
    ),
});
