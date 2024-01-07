export interface Status<T> {
    error: string | null;
    result: Array<T>;
  }