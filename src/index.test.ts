import { getHello } from './hello';

describe('getHello', () => {
  test("returns the string 'Hello world!'", () => {
    expect(getHello()).toBe('Hello world!');
  });
});
