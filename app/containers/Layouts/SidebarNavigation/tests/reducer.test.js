import expect from 'expect';
import sidebarNavigationReducer from '../reducer';

describe('sidebarNavigationReducer', () => {
  it('returns the initial state', () => {
    expect(sidebarNavigationReducer(undefined, {})).toEqual({});
  });
});
