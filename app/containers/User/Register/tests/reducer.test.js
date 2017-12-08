import expect from 'expect';
import registerReducer from '../reducer';

describe('registerReducer', () => {
  it('returns the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual({});
  });
});
