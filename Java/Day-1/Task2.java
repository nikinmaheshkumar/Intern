import java.util.Scanner;

public class Task2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int x = sc.nextInt();
        for (int i = x; i > 0; i--) {
            for (int j = i; j > 0; j--) {
                System.out.print(j);
            }
            System.out.println();
        } 
        sc.close();
    }
}
