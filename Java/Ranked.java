import java.util.Scanner;

public class Ranked {
    public static void main(String[] args) {
    Scanner ler = new Scanner(System.in);

    String nome; 
    int xp ;
    System.out.println("Qual o nome do player ?");
    nome = ler.nextLine();
    System.out.println("Qual o XP do jogador ?");
    xp = ler.nextInt();
    while(xp < 1000) {
        System.out.println("Ferro");
        break;
    } while (xp >= 1001 && xp <= 2000) {
        System.out.println("Bronze");
        break;
    } while(xp>= 2001 && xp <= 5000 ) {
        System.out.println("Prata");
        break;
    } while (xp >= 5001 && xp <= 7000) {
        System.out.println("Ouro");
        break;
    } while (xp >=7001 && xp <= 8000) {
        System.out.println("Platina");
        break;
    } while (xp >= 8001 && xp <= 9000) {
        System.out.println("Ascendente");
        break;
    } while (xp >= 9001 && xp <= 10000) {
        System.out.println("Imortal");
        break;
    } while(xp >= 10001) {
        System.out.println("Radiante");
        break;
    }


    System.out.println("O herói de nome: " + nome + " está no nivel: " + xp);

    ler.close();

    }
    
}