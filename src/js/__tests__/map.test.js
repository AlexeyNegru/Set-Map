import ErrorRepository from "../map";

test('test translate function 1', () => {
  const map = new ErrorRepository();
  const result = map.translate(400);

  expect(result).toBe('Bad Request');
});

test('test translate function 2', () => {
  const map = new ErrorRepository();
  const result = map.translate(403);

  expect(result).toBe('Forbidden');
});

test('test translate function 3', () => {
  const map = new ErrorRepository();
  const result = map.translate(404);

  expect(result).toBe('Not Found');
});

test('test translate function 4', () => {
  const map = new ErrorRepository();
  const result = map.translate(500);

  expect(result).toBe('Unknown error');
});
