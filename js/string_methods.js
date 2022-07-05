function replace() {
    var nome = 'José Ângelo Stefânio Antônio    ';
    console.log(`Nome original: \n${nome}`);
    console.log(nome.length);

    // Retira os espacos em branco no final
    console.log(nome.trim());
    console.log(nome.trim().length);


    // retira os espacos em branco no final e converter tudo para minusculo;
    console.log(nome.trim().toLocaleLowerCase());


    //Retira os espacos em branco no final e converte tudo para maiúsculo;
    console.log(nome.trim().toLocaleUpperCase());

    //Substitue o primeiro caracter 'o' pelo o 'w' 
    console.log(nome.trim().replace('o','w'));

    //Substitue todos os caracteres 'o' por 'w'
    console.log(nome.trim().replaceAll('o','w'));

    //Retonar o indice do caracter esperado
    console.log(nome.trim().indexOf('elo'));

    


}


replace();
