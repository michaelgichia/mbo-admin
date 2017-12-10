import expect from 'expect';
import recentUsersReducer from '../reducer';

describe('recentUsersReducer', () => {
  it('returns the initial state', () => {
    expect(recentUsersReducer(undefined, {})).toEqual({});
  });
});
