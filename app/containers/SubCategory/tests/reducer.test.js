import expect from 'expect';
import subCategoryReducer from '../reducer';

describe('subCategoryReducer', () => {
  it('returns the initial state', () => {
    expect(subCategoryReducer(undefined, {})).toEqual({});
  });
});
