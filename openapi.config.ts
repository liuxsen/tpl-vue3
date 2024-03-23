import { generateService } from '@umijs/openapi'

// https://www.npmjs.com/package/@umijs/openapi
generateService({
  requestLibPath: 'import { request } from \'~/utils/request\'',
  schemaPath: 'https://petstore.swagger.io/v2/swagger.json',
  serversPath: './src/',
  hook: {
    customFunctionName: (data) => {
      const keywords = [
        { key: 'delete', rename: 'remove' },
        { key: 'export', rename: 'download' },
        { key: 'function', rename: 'func' },
      ]
      const id = data.operationId || ''
      const getName = (name: string) => {
        const obj = keywords.find((item) => {
          return item.key === name
        })
        return obj?.rename || name
      }
      return getName(id.split('Using')[0])
    },
  },
})
