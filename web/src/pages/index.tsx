// React
import { FormEvent, useState } from "react";

// Next
import Image from "next/image";

// Axios
import { api } from "../lib/axios";

// Assets
import iconCheckImage from "../assets/icon-check.svg";
import logoImg from "../assets/logo.svg";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import usersAvatars from "../assets/users-avatars.png";

// Toastfy
import { toast } from "react-toastify";

// Interfaces
interface HomeProps {
  poolCount: number;
  guessCount: number;
  usersCount: number;
}

export default function Home(props: HomeProps) {
  const [poolTitle, setPoolTitle] = useState("");

  async function createPool(event: FormEvent) {
    event.preventDefault();

    // Criando o bolão - Create a pool
    try {
      const response = await api.post("/pools", {
        title: poolTitle,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      toast.success("👍 Bolão criado com sucesso!", {
        position: toast.POSITION.TOP_CENTER
      });

      setPoolTitle('')
    } catch (error) {
      toast.error("👎 Falha ao criar o bolão!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-20 items-center">
      <main>
        <Image src={logoImg} alt="Logo NLW Copa" quality={100} />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie o seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image
            src={usersAvatars}
            alt="Avatares de usuários cadastrados no aplicativo"
          />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{props.usersCount}</span> pessoas
            já estão usando
          </strong>
        </div>

        <form onSubmit={createPool} className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text"
            placeholder="Qual nome do seu bolão?"
            required
            onChange={(event) => setPoolTitle(event.target.value)}
            value={poolTitle}
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀.
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImage} alt="Icone de checkout" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-16 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheckImage} alt="Icone de checkout" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image src={appPreviewImg} alt="Imagem preview NLW Copa" quality={100} />
    </div>
  );
}

export const getStaticProps = async () => {
  const [poolCountResponse, guessCountResponse, usersCountResponse] =
    await Promise.all([
      api.get("pools/count"),
      api.get("guesses/count"),
      api.get("users/count"),
    ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      usersCount: usersCountResponse.data.count,
    },
    revalidate: 3600, // 3600 segundos
  };
};
