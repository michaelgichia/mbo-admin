import expect from 'expect';
import createReducer from '../reducer';

describe('createReducer', () => {
  it('returns the initial state', () => {
    expect(createReducer(undefined, {})).toEqual({});
  });
});
