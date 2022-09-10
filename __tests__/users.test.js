const request = require('./endpoint.test');

describe('Текущий пользователь', () => {
  it('Существование роута текущего пользователя', () => {
    return request.get('/users/me').then((response) => {
      expect(response.status).toBe(200);
    });
  });
});
