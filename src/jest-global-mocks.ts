/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StorageMockInterface {
  length: number;
  setItem(key: string, value?: any): any;
  getItem(key: string): any;
  removeItem(key: string): any;
  key(index: number): any;
}

export class StorageMock implements StorageMockInterface {
  private storage: Record<string, any> = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public setItem(key: string, value?: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.storage[key] = value || '';
  }

  public getItem(key: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return key in this.storage ? this.storage[key] : null;
  }

  public removeItem(key: string) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete this.storage[key];
  }

  public get length(): number {
    return Object.keys(this.storage).length;
  }

  public key(index: number) {
    const keys = Object.keys(this.storage);
    return keys[index] ?? null;
  }
}

Object.defineProperty(window, 'localStorage', { value: new StorageMock() });
Object.defineProperty(window, 'sessionStorage', { value: new StorageMock() });
Object.defineProperty(window, 'gtag', { value: null });
Object.defineProperty(window, 'ga', { value: null });
