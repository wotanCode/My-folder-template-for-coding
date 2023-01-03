import { MockedProvider } from '@apollo/client/testing';
import { apolloMock } from '@mocks/apollo/apolloMock';
import { render, waitFor, cleanup } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { AnyAction, Dispatch, Store } from 'redux';

import [FTName] from './[FTName]';

// Mock base component
const mock[FTName]Component = jest.fn(
  jest.requireActual('../component/[FTName]').default
);

jest.mock('../component/[FTName]', () => {
  return (...props: any) => mock[FTName]Component(...props);
});

// Mock redux selector and dispatch fn
jest.mock('react-redux', () => ({
  useSelector: jest.fn((stateSelector: Store<any, AnyAction>) => stateSelector),
  useDispatch: () => jest.fn((action: Dispatch<any>) => action),
}));

// Mock selectors
jest.mock('@redux/selectors', () => ({
  getselector: 'meta',
}));

describe('<[FTName] /> Container', () => {
  afterEach(cleanup);

  it('Must render a <[FTName] /> component with right props', async () => {
    // Change selectors values
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector === 'meta' ? { selectorProp1: 'success', selectorProp2: true } : selector
    );

    render(
      <MockedProvider mocks={[apolloMock]} addTypename={false}>
        <[FTName] />
      </MockedProvider>
    );

    // test correct props
    await waitFor(() => {
      expect(mock[FTName]Component).toHaveBeenCalledWith(
        expect.objectContaining({
          componentProp1: true,
          componentProp2: 'string',
        }),
        {}
      );
    });
  });
});
