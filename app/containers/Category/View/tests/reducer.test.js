import expect from 'expect';
import viewReducer from '../reducer';

describe('viewReducer', () => {
  it('returns the initial state', () => {
    expect(viewReducer(undefined, {})).toEqual({});
  });
});
