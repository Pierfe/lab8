char s[80], s2[50], buffer[50];
    int lung=0;
    int cnt_alfa=0, cnt_num=0;   //inizializzo a 0 perchè senno altero il risultato essendo all'inizio inizializzato a caso
                                //leggo max una parola scanf si ferma al primo spazio

    if(scanf("%s",s) == EOF)   //controllo se c'è stato un errore in lettura
    {                           // ad s non metto & perchè s è una stringa quindi gia un indirizzo di memoria
        printf("Errore in lettura\n");
        return -1;
    }

    lung = strlen(s);
    printf("Lunghezza stringa inserita: %d \n", lung);


    int i, lung2;
    for(i=0; i<lung; i++)
    {
        if(isdigit(s[i]))
            cnt_num++;
        if(isalpha(s[i])) // isalfa rilascia 1 se il carattere è alfabetico
            cnt_alfa++;
    }

    printf("Lettere %d  \nnumeri %d",cnt_alfa, cnt_num);


    gets(buffer);
    gets(s2);
    lung2=strlen(s2);

    int j;
    int flag=1;

    for(i=0; i<lung && flag==1; i++)
    {
        flag=0;
        for(j=0; j<lung2 && flag==0; j++)
        {
            if(s[i + j] != s2[j])
                flag=1;
        }
    }

    if(flag == 1)
        printf("c'e'");
