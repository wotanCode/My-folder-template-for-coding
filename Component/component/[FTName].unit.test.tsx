import { cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react';

import [FTName], { [FTName]T } from './[FTName]';

const mockClick = jest.fn();

// For skeleton test example
jest.mock('@atoms/Skeleton', () => jest.fn(() => <div data-testid="Skeleton" />));

// For components with children example.
jest.mock('@components/AnimatedTransition', () =>
  jest.fn(({ isOpen, children }: any) => (isOpen ? <div>{children}</div> : null))
);

describe('<[FTName] /> component', () => {
  let renderResult: RenderResult;

  afterEach(cleanup);

  const props: [FTName]T = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: mockClick,
  };

  beforeEach(() => {
    renderResult = render(<[FTName] { ...props } />);
  });

  // Content tests
  it('Must render a <[FTName] />', async () => {
    expect(screen.getByText(/prop1/i)).toHaveTextContent('prop1');
    expect(screen.getByText(/prop2/i)).toHaveTextContent('prop2');
  });

  /// Click tests
  it('Click in <[FTName] />', async () => {
    fireEvent.click(screen.getByText('prop1'));

    expect(mockClick).toHaveBeenCalled();
  });

  // Skeleton Test
  it('Must render a skeletons', async () => {
    expect(screen.getAllByTestId('Skeleton')).toHaveLength(2);
  });
});
