import expect from 'expect';
import dashboardViewReducer from '../reducer';

describe('dashboardViewReducer', () => {
  it('returns the initial state', () => {
    expect(dashboardViewReducer(undefined, {})).toEqual({});
  });
});
