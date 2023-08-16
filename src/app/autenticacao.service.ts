import { Usuario } from "./acesso/usuario.module";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"

export class Autenticacao {
    //constructor(
    //public email: string,
    //public senha: string

    //) { }
    public cadastrarUsuario(usuario: Usuario): void {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
            .then((res) => {

                let user: Object = {
                    email: usuario.email,
                    nome_completo: usuario.nome_completo,
                    nome_usuario: usuario.nome_usuario
                }
                const db = getDatabase();
                set(ref(db, `user/ ${btoa(usuario.email)}`), user);

                alert('Usuario cadastrado com sucesso!')
            })
            .catch((error) => {
                console.log('Falha no Cadastro:', error)
            });
    }
}