import java.util.Scanner;

public class Power {



    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter unit: ");
        int unit = sc.nextInt();


        double ratePerUnit = 2.5;
        double totalAmount = unit * ratePerUnit;
        double discountPercentage=0;





        if (unit <= 100) {
            discountPercentage = totalAmount * 0.5;
        } else if
        (unit >100 && unit < 250) {

            discountPercentage = totalAmount * 0.2;

        }else if(unit>500) {
            ratePerUnit = 3;
        }
        else {
                discountPercentage = totalAmount * 1;

    }

        double totalDue = totalAmount - discountPercentage;


        System.out.println("<<<<Bill to Pay>>>>");
        System.out.println("Rate per Unit:"+ratePerUnit);
        System.out.println("Total Amount: "+totalAmount);
        System.out.println("Discount:"+ discountPercentage);
        System.out.println("Total Due:"+totalDue);
        System.out.println("<<<Thank You >>>> ");





    }
}
