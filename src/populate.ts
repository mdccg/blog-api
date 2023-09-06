import { UserController } from './controllers/UserController';
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Post } from './entities/Post'
import { User } from './entities/User'

// const generatePost = (userId: string): Post => {
//   const post = Post.createPost();
// }

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: true,
  entities: [User, Post],
  migrations: [],
  subscribers: [],
})

AppDataSource.initialize()
  .then(async () => {
    const userController = new UserController();
    
    let user: User;

    user = User.createUser('Matheus Daniel Cristal Comparotto Gomes', 'matheus.gomes@estudante.ifms.edu.br', '123');
    user = await userController.registerUser(user);
    
    console.log(user);
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  });

