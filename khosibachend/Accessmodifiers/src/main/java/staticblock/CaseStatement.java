package staticblock;



public class CaseStatement {

    public static void main(String[]args)
    {
        int num = 2;
        switch (num+1)
        {
            case 1:
                System.out.println("Case 1 value is :"+num);

                case 2:

                    System.out.println("Case 2 value is :"+num);

                    default:

                        System.out.println("Default: Value is: "+num);


        }
    }
}
