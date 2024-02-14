export function assertValue<T>(value: T | null | undefined, message?: string) {
  if (value === null || value === undefined) {
    throw new Error(message ?? '값이 할당되지 않았거나 null 입니다.');
  }
  return value;
}
