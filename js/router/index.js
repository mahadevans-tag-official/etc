import { Router } from 'express';

const outputGet = (input, length) => {
  return Array.from({ length })
    .fill()
    .reduce((memo, _, index) => {
      const value = input[index] || {};

      return [...memo, JSON.stringify(value)];
    }, []);
};

export default () => {
  return Router({ caseSensitive: true })
    .post('/doubledGet', (request, response) => {
      return response.json(
        request.body._arg1.reduce((memo, __arg1) => [...memo, __arg1 * 2], [])
      );
    })
    .post('/graphGet', (request, response) => {
      const _output = Array.from({ length: 100 })
        .fill()
        .reduce((memo, _, index) => {
          return [
            ...memo,
            {
              x: Math.random() * index,
              y: Math.random() * index
            }
          ];
        }, []);

      const output = outputGet(_output, request.body._arg1.length);

      return response.status(200).json(output);
    });
};
