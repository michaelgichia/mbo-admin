import expect from 'expect';
import editReducer from '../reducer';

describe('editReducer', () => {
  it('returns the initial state', () => {
    expect(editReducer(undefined, {})).toEqual({});
  });
});
