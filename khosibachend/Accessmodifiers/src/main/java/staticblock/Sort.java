package staticblock;

public class Sort {

    public static void main(String[]args)
    {
        int temp;

        int a [] = {2,7,0,4,13,20,26,6};

        for (int i = 0 ; i< a.length;i++){
            for ( int j = i+1 ; j < a.length;j++){

                if(a[i] < a[j])
                {
                    temp = a[i];
                    a[i] = a [j];
                    a[j] = temp;

                    System.out.println("print desending number"+ temp);
                }

            }
        }

    }
}

