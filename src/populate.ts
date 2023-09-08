import { faker } from '@faker-js/faker'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { UserController } from './controllers/UserController'
import { Post } from './entities/Post'
import { User } from './entities/User'
import { PostController } from './controllers/PostController'

const generatePost = (): Post => {
  const title = faker.lorem.sentence()
  const content = faker.lorem.paragraphs()
  const post = Post.createPost(title, content)
  return post
}

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
    const userController = new UserController()
    const postController = new PostController()

    let user: User

    user = User.createUser('Matheus Daniel Cristal Comparotto Gomes', 'matheus.gomes@estudante.ifms.edu.br', '123')
    user = await userController.registerUser(user)
    user.posts = []

    const posts = Array(100000).fill(null).map(generatePost)

    posts.forEach(async (post) => {
      post.user = user
      post = await postController.save(post)
      user.posts.push(post)
    })
  })
  .catch((err) => console.error('Error during Data Source initialization', err))
  .finally(() => console.log('ϟ Malfeito feito'))