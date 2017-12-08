import expect from 'expect';
import registerResultReducer from '../reducer';

describe('registerResultReducer', () => {
  it('returns the initial state', () => {
    expect(registerResultReducer(undefined, {})).toEqual({});
  });
});
