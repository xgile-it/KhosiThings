package Ecapsulation;

public class TestPerson {

    public static void main(String[] args) {
        Person person = new Person();

        person.setName("KHOSI");
        person.setWeight(50.8);


        System.out.println("The name of the person is: " + person.getName());
        System.out.println("The weight is: " + person.getWeight() + "kg");

    }
}
