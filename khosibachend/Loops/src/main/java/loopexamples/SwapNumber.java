package loopexamples;

public class SwapNumber {

    public static void main(String[]args)
    {
        int x = 1;
        int y = 2;

        int temp;

        temp = x;
        x = y ;
        y = temp;

        System.out.println(x);
        System.out.println(y);

    }
}
