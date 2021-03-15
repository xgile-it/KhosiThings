package staticblock;

public class StaticExample {

    public static void main(String[] args) {



    }


        static {
            System.out.println("Hello from the static block! 1");
        }

        public StaticExample() {
            System.out.println("Hello from the constructor!");
        }

        static {
            System.out.println("Hello from the static block! 2");
        }
    }


