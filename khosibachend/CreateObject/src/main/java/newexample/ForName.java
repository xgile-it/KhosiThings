package newexample;




public class ForName {


    public static void main(String[] args) {

        try {

            Class cls = Class.forName("java.lang.ClassLoader");


            System.out.println("Class found = " + cls.getName());
            System.out.println("Package = " + cls.getPackage());
        } catch (ClassNotFoundException ex) {
            System.out.println(ex.toString());
        }
    }
}
