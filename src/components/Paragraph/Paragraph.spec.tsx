import { render, screen } from '@/utils/tests';
import { theme } from '@/styles';
import { Paragraph } from '.';

it('<Paragraph />', () => {
  render(<Paragraph>Lorem ipsum</Paragraph>);
  expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
    color: theme.colors.black
  });
});
