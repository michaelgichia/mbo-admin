import expect from 'expect';
import bannerPageReducer from '../reducer';

describe('bannerPageReducer', () => {
  it('returns the initial state', () => {
    expect(bannerPageReducer(undefined, {})).toEqual({});
  });
});
