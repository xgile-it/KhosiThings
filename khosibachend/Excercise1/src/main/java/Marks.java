import java.util.Scanner;

public class Marks {

    public static void main(String[]args)
    {
        int english;
        int maths;
        int siswati;
        int physics;
        int lifeOrientation;
        int lifeScience;
        int agriculture;

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Subject Marks");

        english=sc.nextInt();
        maths=sc.nextInt();
        siswati=sc.nextInt();
        physics=sc.nextInt();
        lifeOrientation=sc.nextInt();
        lifeScience=sc.nextInt();
        agriculture=sc.nextInt();



        int  total =english+maths+siswati+physics+lifeOrientation+lifeScience+agriculture;
        double avarage=total/7;
        double percentage=(total/700)*100;


        if
        (avarage >=75)
        {
            System.out.println("pass with Distinction");
        }
        else
        if
        (avarage >= 50 && avarage<=74){
            System.out.println("You passed");
        }
        else

        {
            System.out.println("You failed");
        }




    }


}
