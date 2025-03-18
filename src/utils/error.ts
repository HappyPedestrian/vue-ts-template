type MessageErrorHandlerOptions = {
  type: 'message'
  message: string
}

type DialogErrorHandlerOptions = {
  type: 'dialog'
  dialog: {
    message: string
  }
}

type ErrorHandlerOptions = MessageErrorHandlerOptions | DialogErrorHandlerOptions

export function errorHandler(error: Error, options?: ErrorHandlerOptions) {
  console.error(error)
}
