import { StorageMock } from './jest-global-mocks';

const TEST_VALUE = 2;

describe('JestMocks', () => {
  it('localStorage must be empty', () => {
    const localStorage = new StorageMock();
    expect(localStorage.length).toEqual(0);
  });

  it('localStorage set item / get item', () => {
    const localStorage = new StorageMock();

    localStorage.setItem('key-empty');
    localStorage.setItem('key-number', 1);
    localStorage.setItem('key-string', 'value');
    localStorage.setItem('key-array', [TEST_VALUE]);
    localStorage.setItem('key-object', { a: 'b' });

    expect(localStorage.getItem('key-not-found')).toEqual(null);
    expect(localStorage.getItem('key-empty')).toEqual('');
    expect(localStorage.getItem('key-number')).toEqual(1);
    expect(localStorage.getItem('key-string')).toEqual('value');
    expect(localStorage.getItem('key-array')).toEqual([TEST_VALUE]);
    expect(localStorage.getItem('key-object')).toEqual({ a: 'b' });
  });

  it('localStorage set item / remove item', () => {
    const localStorage = new StorageMock();

    localStorage.setItem('key-number', 1);
    expect(localStorage.getItem('key-number')).toEqual(1);
    localStorage.removeItem('key-number');
    expect(localStorage.getItem('key-number')).toEqual(null);
  });

  it('localStorage set item / key', () => {
    const localStorage = new StorageMock();

    localStorage.setItem('key-number', 1);
    expect(localStorage.key(0)).toEqual('key-number');
    expect(localStorage.key(1)).toEqual(null);
  });
});
