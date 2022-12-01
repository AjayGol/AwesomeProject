import constant from '../helper/constant';


export function validatorEmail(email) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return emailPattern.test(email);
}


export function fontManage(type= 'default') {
  switch (type){
    case 'default':
      return {
        fontSize: fontSizeManage(),
        fontWeight: '400'
      }
    case 'bold':
      return {
        fontSize: fontSizeManage(),
        fontWeight: '700'
      }
    default:
      break;
  }
  return {};
}

export function fontSizeManage(size = 15) {
  return size * (constant.screenWidth / 450);
}


