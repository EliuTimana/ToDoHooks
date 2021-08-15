import { addTask } from '../api';

jest.mock('../api');

beforeEach(jest.clearAllMocks);

it('should return a new task when addTask is called', async () => {
  (addTask as jest.Mock).mockResolvedValue({ id: 1, description: 'test', done: false });
  const r = await addTask('test');
  expect(r).not.toBeNull();
  expect(r.description).toBe('test');
  expect(r.id).toBe(1);
});
