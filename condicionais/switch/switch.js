const fruta = 'pera';

switch (fruta) {
    case 'banana':
        console.log('R$ 30,00 o quilo');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 o quilo');
        break;
    default:
        console.log('O produto não existe no estoque.');
}
