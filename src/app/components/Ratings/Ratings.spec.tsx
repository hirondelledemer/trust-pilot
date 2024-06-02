import { fireEvent, render, screen } from '@testing-library/react';
import Ratings from './Ratings';
import { useForm } from 'react-hook-form';
import { Inputs } from '../ReviewForm.utils';

describe('Ratings', () => {
  it('should show image without stars', async () => {
    const Component = () => {
      const { control } = useForm<Inputs>();
      return <Ratings control={control} name="rating" />;
    };

    render(<Component />);

    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-0.svg'
    );
  });

  it('should show image colored image if one of the stars is hovered', async () => {
    const Component = () => {
      const { control } = useForm<Inputs>();
      return <Ratings control={control} name="rating" />;
    };

    render(<Component />);

    const star3 = screen.getByRole('radio', {
      name: /3 stars: average/i,
    });
    fireEvent.mouseOver(star3);

    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-3.svg'
    );

    fireEvent.mouseOut(star3);
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-0.svg'
    );
  });
});
