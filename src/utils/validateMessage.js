
export default (errors) => {
  errors.forEach( error => {
    switch(error.code){
      case 'string.empty':
        error.message= `Es requerido`;
        break;

      case 'string.min':
        error.message= `Al menos ${error.local.limit} caracteres`;
        break;
      
      case 'string.max':
        error.message= `Máximo ${error.local.limit} caracteres`;
        break;
      
      case 'string.alphanum':
        error.message= `No es un valor válido`;
        break;

      case 'string.email':
        error.message= `No es un correo válido`;
        break;
      
      case 'string.allowOnly':
        error.message= `No es un valor válido`;

      case 'string.uri':
        error.message = `No es una URL válida`;
        break;

      case 'number.base':
        error.message = `Solo números`;
        break;

      case 'number.min':
        error.message = `Al menos ${error.local.limit}`;
        break;

      case 'number.max':
        error.message = `Máximo ${error.local.limit}`;
        break;

      default:
        error.message= '';
        break;
    }
  });
  return errors;
}