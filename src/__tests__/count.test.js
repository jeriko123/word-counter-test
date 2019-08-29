import countWords from '../countWords';

describe('the counting function', () => {
  it('counts the correct number of words', () => {
    expect(countWords('One Two Three')).toBe(3);
  });
  it('Count an empty strings', () => {
  	expect(countWords('')).toBe(0);
	});
});


