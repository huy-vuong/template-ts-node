import { getHello } from 'starter-kit/hello';

describe('getHello', () => {
  test("returns the string 'Hello world!'", () => {
    expect(getHello()).toBe('Hello world!');
  });
});
