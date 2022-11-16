import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

// Routes
import { poolRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { gameRoutes } from "./routes/game";
import { authRoutes } from "./routes/auth";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  // Origin -> Permite qualquer aplicação ter acesso ao backend.
  // Em um ambiente de produção no lugar de 'true', colocar o endereço da página.
  await fastify.register(cors, {
    origin: true,
  });

  // Em produção -> Variável Ambiente! Criar um TOKEN!
  await fastify.register(jwt, {
    secret: "nlwcopa",
  });

  // Routes
  // Default -> http://localhost:3333

  await fastify.register(poolRoutes);
  await fastify.register(authRoutes);
  await fastify.register(gameRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(userRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
