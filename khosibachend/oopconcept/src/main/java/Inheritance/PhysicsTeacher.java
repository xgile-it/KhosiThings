package Inheritance;

public class PhysicsTeacher extends Teacher {
    String mainSubject = "Physics";

    public static void main(String args[]) {
        PhysicsTeacher obj = new PhysicsTeacher();
        System.out.println(obj.bookName);
        System.out.println(obj.designation);
        System.out.println(obj.mainSubject);
        obj.does();
    }
}
