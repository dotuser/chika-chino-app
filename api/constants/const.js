export const path = '/public/temp/';

export const convertPhoneNumber = number => {
    number = number.replace(/\D/g, '');
    if (number.startsWith('03')) {
        return '92' + number.slice(1);
    }
    return number;
}