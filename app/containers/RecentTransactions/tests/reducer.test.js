import expect from 'expect';
import recentTransactionsReducer from '../reducer';

describe('recentTransactionsReducer', () => {
  it('returns the initial state', () => {
    expect(recentTransactionsReducer(undefined, {})).toEqual({});
  });
});
