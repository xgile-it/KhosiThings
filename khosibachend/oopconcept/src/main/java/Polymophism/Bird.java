package Polymophism;

public class Bird {

    public void fly() {
        System.out.println("The bird is flying.");
    }
    public void fly(int height) {
        System.out.println("The bird is flying " + height);
    }
    public void fly(String name, int height) {
        System.out.println("The " + name + " is flying " + height);
    }




}
